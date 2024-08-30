<script>
 export default {
	props: {
		handleIsAdingComment: {
			type: Function,
			required: true,
		}
	}
 }
</script>

<template>
	<button 
		type="button" 
		className="button is-link"
		@click="handleIsAdingComment(true)"
	>
		Write a comment
	</button>
</template>


<style>

</style>