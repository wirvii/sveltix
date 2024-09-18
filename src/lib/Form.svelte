<script>
	import GridLayout from './_internal/GridLayout.svelte';
	import Item from './Item.svelte';

	export let items = [];
	export let colCount = 2;
	export let onSubmit = null;

	let formData = {};

	// Función para manejar eventos de los items
	function handleItemEvent(event) {
		const { name, value } = event.detail;
		formData = { ...formData, [name]: value };
	}

	function handleSubmit(event) {
		event.preventDefault();
		if (onSubmit) {
			onSubmit(formData);
		}
	}
</script>

<form on:submit={handleSubmit}>
	<GridLayout {colCount}>
		{#each items as item}
			<Item
				{...item}
				on:input={handleItemEvent}
				on:change={handleItemEvent}
				on:click={handleItemEvent}
			/>
		{/each}
		<slot></slot>
	</GridLayout>
</form>
