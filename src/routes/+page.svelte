<script>
	import Form from "$lib/Form.svelte";
	import Item from "$lib/Item.svelte";

</script>

<Form>
	<Item itemType="button" name="Normal" colSpan="1" horizontalAlignment="left" buttonOptions={{ type: 'normal' }} />
	<Item itemType="button" name="Default" colSpan="1" horizontalAlignment="center" buttonOptions={{ type: 'default' }} />
	<Item itemType="button" name="Success" colSpan="1" horizontalAlignment="right" buttonOptions={{ type: 'success' }} />
	<Item itemType="button" name="Danger" colSpan="1" horizontalAlignment="left" buttonOptions={{ type: 'danger' }} />
</Form>