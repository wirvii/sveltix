<script>
    import { StyleBuilder } from "./styles.js";

    const styles = new StyleBuilder();
</script>

<div class={styles.inputLabelGroup().build()}>
    <slot></slot>
</div>