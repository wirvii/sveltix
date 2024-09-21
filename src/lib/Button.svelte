<script>
	import './_internal/base.css';
	
	import { createEventDispatcher } from 'svelte';
	import { StyleBuilder, cssUtils } from './_internal/styles.js';
	import { ButtonType } from './_internal/types.js';

	export let text = 'Normal';
	export let type = ButtonType.Normal;
	export let onClick = null;
	export let disabled = false;
	export let width = '100px';
	export let height = '36px';
	export let visible = true;
	export let hint = '';
	export let cssClass = '';
	export let cssStyle = '';

	const styles = new StyleBuilder();
	const dispatch = createEventDispatcher();

	function handleClick(event) {
		if (onClick && typeof onClick === 'function') {
			onClick();
		}
		dispatch('click', event);
	}
</script>

<button
	type="button"
	class={styles.button(type).addStyle(cssClass).build()}
	on:click={handleClick}
	{disabled}
	style="width: {cssUtils.normalize(width)}; height: {cssUtils.normalize(height)}; {cssStyle}"
	hidden={!visible}
	title={hint}
>
	{text}
</button>
