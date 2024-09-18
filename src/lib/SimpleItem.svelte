<script>
	import Input from "./_internal/Input.svelte";
	import { EditorType } from "./_internal/types.js";
	import Empty from "./Empty.svelte";
	import Select from "./Select.svelte";
	import Textarea from "./Textarea.svelte";

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
		showColon: true,
		visible: true
	};

    $: labelText = (label && label.text ? label.text : name).trim();
	$: showColon = label && label.showColon;
</script>

<div class="h-full w-full">
	{#if editorType === EditorType.Text}
		<Input
			type={editorType}
			label={labelText}
			{showColon}
			{name}
			{value}
			required={isRequired}
			{...editorOptions}
		/>
	{:else if editorType === EditorType.Textarea}
		<Textarea label={labelText} {name} {value} required={isRequired} {...editorOptions} />
	{:else if editorType === EditorType.Select}
		<Select label={labelText} {name} {value} required={isRequired} {...editorOptions} />
	{:else}
		<Empty>
			<slot></slot>
		</Empty>
	{/if}
</div>
