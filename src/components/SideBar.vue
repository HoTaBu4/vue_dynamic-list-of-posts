<script>
	import AddPost from './AddPost.vue';
	import PostPreview from './PostPreview.vue'
	import { inject } from 'vue';

	export default {
		data() {
			return {
				editingPost: null,
				selectedComment: null,
			}
		},
		components: {
			AddPost,
			PostPreview,
		},
		setup () {
			const toggleSideBar = inject('toggleSideBar');
      const isOpenSideBar = inject('isOpenSideBar');
			
			return {
				toggleSideBar,
				isOpenSideBar
			}
		},
		computed: {
			openedSideBar() {
				console.log(this.isOpenSideBar.comments)
				return this.isOpenSideBar.comments || this.isOpenSideBar.createPost;
			}
		},
		
	}
</script>

<template>
	<div 
		class="tile is-parent is-8-desktop Sidebar"
		:class="{ 'Sidebar--open': openedSideBar }"
	>
		<div class="tile is-child box is-success ">
			<div class="tile is-child box is-success ">
			<div class="content">
				<AddPost v-if="isOpenSideBar" />
				<PostPreview v-if="isOpenSideBar.commets" />
			</div>
			</div>
		</div>
	</div>
</template>



<style>
</style>