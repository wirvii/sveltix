<script>
	import Form from '$lib/Form.svelte';
	import Item from '$lib/Item.svelte';

</script>

<Form>
	<Item itemType="group" name="Perfil del Usuario" textAlign="center" colCount="3">

		<Item itemType="simple" editorType="text" name="Nombre para mostrar" isRequired="true" colSpan="1" />
		<Item itemType="simple" editorType="text" name="Correo Electrónico" editorOptions={{ pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" }} colSpan="1" />
		<Item itemType="simple" editorType="text" name="Contraseña" isRequired="true" colSpan="1" />

		<Item itemType="button" name="Guardar" horizontalAlignment="center" colSpan="1" buttonOptions={{ type: 'success' }} />
		<Item itemType="empty" colSpan="1" />
		<Item itemType="button" name="Cancelar" horizontalAlignment="center" colSpan="1" buttonOptions={{ type: 'danger' }} />
	</Item>
</Form>