<script>
	import './base.css'

	export let colCount = 1

	$: cols = Math.min(12, Math.max(1, colCount))
</script>

<div class="grid grid-cols-{cols} gap-4">
	<slot></slot>
</div>
