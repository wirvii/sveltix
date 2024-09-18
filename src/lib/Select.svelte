<script>
	import { createEventDispatcher } from 'svelte';

	export let id = Math.random().toString(36).substring(7);
	export let label = '';
	export let name = '';
	export let options = [];
	export let value = '';
	export let required = false;
	export let disabled = false;

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
		class="block w-full text-sm px-2.5 pt-2 pb-1 border border-gray-300 focus:outline-none focus:ring-2
		focus:ring-orange-300 appearance-none focus:border-0 cursor-pointer"
	>
		<option value="" disabled selected hidden></option>
		{#each options as option}
			<option value={option.value}>{option.label}</option>
		{/each}
	</select>
	<label
		for={id}
		class="absolute left-1 top-2 font-light text-sm text-orange-400 bg-white px-1
			 pointer-events-none transform -translate-y-1/2"
	>
		{label}
		{#if required}
			<span class="text-red-500 font-thin">*</span>
		{/if}
	</label>
</div>
