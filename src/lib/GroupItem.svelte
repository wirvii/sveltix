<script>
	import GridLayout from "./_internal/GridLayout.svelte";
	import { StyleBuilder } from "./_internal/styles.js";

    export let title = '';
    export let colCount = 2;
    export let textAlign = 'left';

    const styles = new StyleBuilder();
</script>

<div class="h-full w-full">
    <h3 class={styles.addStyle('py-2 font-light text-2xl').textAlign(textAlign).build()}>
        {title}
    </h3>
    <div class="border-t border-gray-300"></div>
    <div class="pt-6">
        <GridLayout {colCount}>
            <slot></slot>
        </GridLayout>
    </div>
</div>