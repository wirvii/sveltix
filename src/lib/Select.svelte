<script>
	import { createEventDispatcher } from 'svelte';
	import { StyleBuilder } from './_internal/styles.js';

	const id = Math.random().toString(36).substring(7);
	export let label = '';
	export let showColon = true;
	export let name = '';
	export let options = [];
	export let value = '';
	export let required = false;
	export let disabled = false;

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
		<option value="" disabled selected hidden></option>
		{#each options as option}
			<option value={option.value}>{option.text}</option>
		{/each}
	</select>
	<label
		for={id}
		class={styles.label().build()}
	>
		{label}
		{#if showColon}
			<span>:</span>
		{/if}
		{#if required}
			<span class="text-red-500 font-thin">*</span>
		{/if}
	</label>
</div>
