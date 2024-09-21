<script>
	import './_internal/base.css';
	
	import { createEventDispatcher } from 'svelte';
	import { StyleBuilder } from './_internal/styles.js';

	const id = Math.random().toString(36).substring(7);
	export let label = {
		text: '',
		showColon: true
	};
	export let name = '';
	export let value = '';
	export let rows = 3;
	export let required = false;
	export let disabled = false;
	export let placeholder = '';

	$: showColon = (label && label.showColon);
	$: labelText = (label && label.text) || name;

	const styles = new StyleBuilder();
	const dispatch = createEventDispatcher();

	function handleInput(event) {
		const value = event.target.value;
		dispatch('input', { name, value });
	}
</script>

<div class="relative pt-2">
	<textarea
		{id}
		{name}
		bind:value
		on:input={handleInput}
		{disabled}
		{required}
		{rows}
		class={styles.textarea().build()}
		{placeholder}
	></textarea>
	<label
		for={id}
		class={styles.label().build()}
	>
		{labelText}
		{#if showColon}
			<span>:</span>
		{/if}
		{#if required}
			<span class={styles.required().build()}>*</span>
		{/if}
	</label>
</div>
