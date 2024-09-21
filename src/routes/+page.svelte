<script>
	// import Form from '$lib/Form.svelte';
	// import Item from '$lib/Item.svelte';

	import TextBox from "$lib/TextBox.svelte";

	// const paises = [
	// 	{ value: 'mx', text: 'México' },
	// 	{ value: 'us', text: 'Estados Unidos' },
	// 	{ value: 'ca', text: 'Canadá' }
	// ];

	// const ciudades = [
	// 	{ value: 'cdmx', text: 'Ciudad de México' },
	// 	{ value: 'gdl', text: 'Guadalajara' },
	// 	{ value: 'mty', text: 'Monterrey' }
	// ];

	function handleValidationError(event) {
		console.log('Validation error:', event.detail);
	}

	function handle(event) {
		console.log('Event:', event.detail);
	}

	const onlyNumbers = /^\d+$/;

</script>

<div class="p-3">
	<TextBox
		label={{ text: 'Campo Requerido', showColon: true }}
		required="true"
		on:validationError={handleValidationError}
		on:lostFocus={handle}
		on:gotFocus={handle}
		on:valueChanged={handle}
	/>
	<TextBox
		label={{ text: 'Solo numeros', showColon: true }}
		pattern={onlyNumbers}
		on:validationError={handleValidationError}
	/>
	<TextBox
		label={{ text: 'Minimo 5', showColon: true }}
		minlength="5"
		on:validationError={handleValidationError}
	/>
</div>

<!--<Form>
	<Item itemType="group" name="Perfil del Usuario" textAlign="center" colCount="3">

		<Item itemType="simple" editorType="text" name="Nombre para mostrar" colSpan="1" />
		<Item itemType="simple" editorType="text" name="Correo Electrónico" isRequired="true" colSpan="1" />
		<Item itemType="simple" editorType="text" name="Contraseña" isRequired="true" colSpan="1" />

		<Item itemType="group" name="Información Personal" textAlign="left" colCount="2" colSpan="2">
			<Item itemType="simple" editorType="text" name="Nombre" colSpan="1" />
			<Item itemType="simple" editorType="text" name="Apellidos" colSpan="1" />
			<Item itemType="simple" editorType="text" name="Dirección" colSpan="2" />
			<Item
				itemType="simple"
				editorType="select"
				name="País"
				colSpan="1"
				editorOptions={{ options: paises }}
			/>
			<Item
				itemType="simple"
				editorType="select"
				name="Ciudad"
				colSpan="1"
				editorOptions={{ options: ciudades }}
			/>
			<Item
				itemType="simple"
				editorType="textarea"
				name="Observaciones"
				colSpan="2"
				editorOptions={{ rows: 2 }}
			/>
		</Item>
		<Item itemType="group" name="Otros datos" textAlign="left" colCount="2" colSpan="1">
			<Item itemType="simple" editorType="text" name="Dato 1" colSpan="1" />
			<Item itemType="simple" editorType="text" name="Dato 2" colSpan="1" />
			<Item
				itemType="simple"
				editorType="textarea"
				name="Observaciones"
				colSpan="2"
				editorOptions={{ rows: 8 }}
			/>
		</Item>
		<Item itemType="button" name="Guardar" horizontalAlignment="center" colSpan="1" buttonOptions={{ type: 'success' }} />
		<Item itemType="empty" colSpan="1" />
		<Item itemType="button" name="Cancelar" horizontalAlignment="center" colSpan="1" buttonOptions={{ type: 'danger' }} />
	</Item>
</Form>
-->