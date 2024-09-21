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
	export let options = [];
	export let value = '';
	export let required = false;
	export let disabled = false;

	$: showColon = label && label.showColon;
	$: labelText = (label && label.text) || name;

	const styles = new StyleBuilder();
	const dispatch = createEventDispatcher();

	function handleChange(event) {
		const value = event.target.value;
		dispatch('change', { name, value });
	}
</script>

<div class="relative pt-2">
	<select
		{id}
		{name}
		bind:value
		on:change={handleChange}
		{disabled}
		{required}
		class={styles.select().build()}
	>
		{#each options as option}
			<option value={option.value}>{option.text}</option>
		{/each}
	</select>
	
	<label for={id} class={styles.label().build()}>
		{labelText}
		{#if showColon}
			<span>:</span>
		{/if}
		{#if required}
			<span class={styles.required().build()}>*</span>
		{/if}
	</label>

	<div class={styles.selectButton().build()}>
		<svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
			<path
				fill-rule="evenodd"
				d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 011.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
				clip-rule="evenodd"
			/>
		</svg>
	</div>
</div>
