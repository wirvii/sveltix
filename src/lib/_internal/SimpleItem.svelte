<script>
	import './base.css';

	import { EditorType } from './types.js';
	import Empty from './Empty.svelte';
	import Select from '../Select.svelte';
	import Textarea from '../Textarea.svelte';
	import TextBox from '../TextBox.svelte';

	// Propiedades comunes
	export let name = ''; // Nombre del campo

	// Propiedades del tipo input
	export let value = '';
	//export let dataField = '';
	export let editorOptions = {};
	export let editorType = 'text';
	export let isRequired = false;
	export let label = {
		text: name,
		showColon: false
	};
</script>

<div class="h-full w-full">
	{#if editorType === EditorType.Text}
		<TextBox
			{label}
			{name}
			{value}
			required={isRequired}
			{...editorOptions}
		/>
	{:else if editorType === EditorType.Textarea}
		<Textarea {label} {name} {value} required={isRequired} {...editorOptions} />
	{:else if editorType === EditorType.Select}
		<Select {label} {name} {value} required={isRequired} {...editorOptions} />
	{:else}
		<Empty>
			<slot></slot>
		</Empty>
	{/if}
</div>
