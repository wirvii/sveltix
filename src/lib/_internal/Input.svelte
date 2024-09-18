<script>
	import { createEventDispatcher } from 'svelte';
	import { LABEL_STYLES, INPUT_STYLES, REQUIRED_STYLES } from './styles.js';
	import InputLabelGroup from './InputLabelGroup.svelte';

	export let label = '';
	export let type = 'text';
	export let id = Math.random().toString(36).substring(7);
	export let name = '';
	export let value = '';
	export let min = '';
	export let max = '';
	export let required = false;
	export let disabled = false;

	const dispatch = createEventDispatcher();

	function handleInput(event) {
		const value = event.target.value;
		dispatch('input', { name, value });
	}
</script>

<InputLabelGroup>
	<input
		{type}
		{id}
		{name}
		bind:value
		on:input={handleInput}
		{min}
		{max}
		{disabled}
		{required}
		class={INPUT_STYLES}
		placeholder=" "
	/>
	<label
		for={id}
		class={LABEL_STYLES}
	>
		{label}
		{#if required}
			<span class={REQUIRED_STYLES}>*</span>
		{/if}
	</label>
</InputLabelGroup>
