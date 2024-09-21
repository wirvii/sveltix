<script>
	import './base.css';

	import { createEventDispatcher } from 'svelte';
	import { StyleBuilder } from './styles.js';
	import InputLabelGroup from './InputLabelGroup.svelte';

	const id = Math.random().toString(36).substring(7);
	export let label = '';
	export let showColon = true;
	export let type = 'text';
	export let name = '';
	export let value = '';
	export let min = '';
	export let max = '';
	export let required = false;
	export let disabled = false;

	const styles = new StyleBuilder();
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
		class={styles.input().build()}
		placeholder=" "
		autocomplete="off"
	/>
	<label
		for={id}
		class={styles.label().build()}
	>
		{label}
		{#if showColon}
			<span>:</span>
		{/if}
		{#if required}
			<span class={styles.required().build()}>*</span>
		{/if}
	</label>
</InputLabelGroup>
