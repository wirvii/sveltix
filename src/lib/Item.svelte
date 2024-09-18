<script>
	import { StyleBuilder } from './_internal/styles.js';
	import { HorizontalAlignment, ItemType, TextAlign } from './_internal/types.js';
	import Button from './Button.svelte';
	import Empty from './Empty.svelte';

	import { createEventDispatcher } from 'svelte';
	import GroupItem from './GroupItem.svelte';
	import SimpleItem from './SimpleItem.svelte';

	const styles = new StyleBuilder();
	const dispatch = createEventDispatcher();

	// Propiedades comunes
	export let itemType = 'empty'; // Tipo del item
	export let name = ''; // Nombre del campo
	export let colCount = 2; // Número de columnas del grid
	export let colSpan = 2; // Columnas que ocupa en el grid
	export let cssClass = ''; // Clases CSS adicionales
	export let visible = true; // Visibilidad del campo

	// Propiedades del tipo button
	export let buttonOptions = {};
	export let horizontalAlignment = HorizontalAlignment.Left;

	// Propiedades del tipo group
	export let textAlign = TextAlign.Left;

	// Propiedades del tipo input
	export let value = '';
	//export let dataField = '';
	export let editorOptions = {};
	export let editorType = 'text';
	export let isRequired = false;
	export let label = {
		text: name,
		showColon: true,
		visible: true
	};

	// Función para manejar eventos y reenviarlos al componente padre
	function handleEvent(event) {
		dispatch(event.type, event.detail);
	}
</script>

{#if visible}
	<div class={`col-span-${colSpan} ${cssClass}`}>
		{#if itemType === ItemType.Button}
			<div class={styles.addStyle('w-full flex').horizontalAlignment(horizontalAlignment).build()}>
				<Button text={name} {...buttonOptions} on:click={handleEvent} />
			</div>
		{:else if itemType === ItemType.Simple}
			<SimpleItem {name} {value} {editorType} {editorOptions} {isRequired} {label} />
		{:else if itemType === ItemType.Group}
			<GroupItem title={name} colCount={colCount} {textAlign}>
				<slot></slot>
			</GroupItem>
		{:else}
			<Empty>
				<slot></slot>
			</Empty>
		{/if}
	</div>
{/if}
