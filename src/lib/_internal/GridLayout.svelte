<script>
	import './base.css'

	export let colCount = 12

	$: cols = Math.min(12, Math.max(1, colCount))
</script>

<div class="grid grid-cols-{cols}">
	<slot></slot>
</div>
