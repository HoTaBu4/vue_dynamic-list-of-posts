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
		props: {
			selectedPost : {
				type: Object,
				default: null,
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
				isOpenSideBar,
			}
		},
		computed: {
			openedSideBar() {
				return this.isOpenSideBar.comments || this.isOpenSideBar.createPost;
			}
		},
	}
</script>

<template>
	<div 
		class="tile is-parent is-8-desktop Sidebar"
		:class="{ 'Sidebar--open' : openedSideBar }"
	>
		<div class="tile is-child box is-success ">
			<div class="content">
				<AddPost v-if="isOpenSideBar.createPost" />
				<PostPreview  v-if="isOpenSideBar.comments"/>
			</div>
		</div>
	</div>
</template>

<style>
</style>