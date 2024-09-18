<script>
	import Form from '$lib/Form.svelte';
	import Item from '$lib/Item.svelte';

	const options = [
		{ value: '+57', text: 'Colombia' },
		{ value: '+1', text: 'USA' },
		{ value: '+52', text: 'Mexico' }
	];
</script>

<Form colCount="4">
	<Item itemType="group" name="Información Personal" textAlign="center" colCount="2" colSpan="2">
		<Item itemType="simple" editorType="text" name="Nombre" isRequired="true" colSpan="1" />
		<Item
			itemType="simple"
			editorType="select"
			name="País"
			colSpan="1"
			editorOptions={{ options }}
		/>
		<Item
			itemType="simple"
			editorType="textarea"
			name="Observaciones"
			colSpan="2"
			editorOptions={{ rows: 2 }}
		/>
	</Item>
	<Item itemType="group" name="Información Personal" textAlign="center" colCount="2" colSpan="2">
		<Item itemType="simple" editorType="text" name="Nombre" colSpan="1" />
		<Item
			itemType="simple"
			editorType="select"
			name="País"
			colSpan="1"
			editorOptions={{ options }}
		/>
		<Item
			itemType="simple"
			editorType="textarea"
			name="Observaciones"
			colSpan="2"
			editorOptions={{ rows: 2 }}
		/>
	</Item>
</Form>
