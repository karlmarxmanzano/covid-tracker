<template>
	<div id="app">
		<app-index />
	</div>
</template>

<script>
	import Index from '@/components/Index'

	export default {
		name: 'App',
		components: {
			'app-index': Index
		}
	}
</script>