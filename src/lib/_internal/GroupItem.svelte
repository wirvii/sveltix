<script>
    import './base.css';

	import GridLayout from "./GridLayout.svelte";
	import { StyleBuilder } from "./styles.js";

    export let title = '';
    export let colCount = 1;
    export let textAlign = 'left';

    const styles = new StyleBuilder();
</script>

<div class="h-full w-full">
    {#if (title && title.trim() !== '')}
        <h3 class={styles.addStyle('py-2 font-light text-2xl').textAlign(textAlign).build()}>
            {title}
        </h3>
        <div class="border-t border-gray-300"></div>
    {/if}
    <div class="pt-6">
        <GridLayout {colCount}>
            <slot></slot>
        </GridLayout>
    </div>
</div>