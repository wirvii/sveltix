<script>
	import './_internal/base.css';

	import { createEventDispatcher } from 'svelte';
	import InputLabelGroup from './_internal/InputLabelGroup.svelte';
	import { StyleBuilder } from './_internal/styles.js';
	import { validator } from './_internal/validators.js';
	import { events } from './_internal/consts.js';

	const styles = new StyleBuilder();
	const dispatch = createEventDispatcher();

	const id = Math.random().toString(36).substring(7);
	export let label = {
		text: '',
		showColon: true
	};
	export let value = '';
	export let name = ('TextBox-' + id);
	export let placeholder = '';
	export let required = false;
	export let disabled = false;
	export let readonly = false;
	export let maxlength = 300;
	export let minlength = 0;
	export let pattern = null;
	export let tabindex = null;
	export let title = '';
	export let ariaLabel = '';
	export let ariaDescribedby = '';
	export let errorMessage = '';

	$: showColon = label && label.showColon;
	$: labelText = (label && label.text) || name;

	let _isValid = true;
	let _errorMessage = '';

	function validate(target) {
		if (target) {
			_errorMessage = '';

			if (validator.errorRequired(required, target)) {
				_isValid = false;
				_errorMessage = errorMessage || 'Field is required';
			}

			if (validator.errorPattern(pattern, target)) {
				_isValid = false;
				_errorMessage = errorMessage || 'Field format is invalid';
			}

			if (validator.errorMinLength(minlength, target)) {
				_isValid = false;
				_errorMessage = errorMessage || 'Field length cannot be less than ' + minlength;
			}

			if (_errorMessage.length > 0) {
				target.setCustomValidity(_errorMessage);
				dispatch(events.ValidationError, { target: target, name: name, value: target.value, error: _errorMessage });
				return;
			}

			_isValid = true;
			_errorMessage = '';
			target.setCustomValidity('');
		}
	}

	function handleBlur(event) {
		dispatch(events.LostFocus, { target: event.target, name: name });
	}

	function handleFocus(event) {
		dispatch(events.GotFocus, { target: event.target, name: name });
	}

	function handleChange(event) {
		value = event.target.value;
		dispatch(events.ValueChanged, { target: event.target, name: name, value: event.target.value });
		validate(event.target);
	}
</script>

<InputLabelGroup>
	<div class="relative w-full h-full">
		<input
			type="text"
			bind:value
			{name}
			{id}
			{placeholder}
			{disabled}
			{readonly}
			{maxlength}
			{minlength}
			{tabindex}
			{title}
			aria-label={ariaLabel}
			aria-describedby={ariaDescribedby}
			on:blur={handleBlur}
			on:focus={handleFocus}
			on:change={handleChange}
			autocomplete="off"
			class={styles.input(_isValid).build()}
		/>
		{#if !_isValid}
			<p
				class={styles.validationMessage().build()}
				style="bottom: -16px; left: 4px; z-index: 99999999;"
			>
				{_errorMessage}
			</p>
		{/if}
	</div>
	<label for={id} class={styles.label().build()}>
		{labelText}
		{#if showColon}
			<span>:</span>
		{/if}
		{#if required}
			<span class={styles.required().build()} title="required" aria-label="required">*</span>
		{/if}
	</label>
</InputLabelGroup>
