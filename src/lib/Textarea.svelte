<script>
	import { createEventDispatcher } from 'svelte';

	export let id = Math.random().toString(36).substring(7);
	export let label = '';
	export let name = '';
	export let value = '';
	export let rows = 3;
	export let required = false;
	export let disabled = false;

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
		class="block w-full text-sm px-2.5 pt-2 pb-1 border border-gray-300 focus:outline-none focus:ring-2
		focus:ring-orange-300 resize-none focus:border-0"
		placeholder=" "
	></textarea>
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
