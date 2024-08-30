
<script>
import { getUserPosts } from './../api/posts.js';
import { inject } from 'vue';
import { CLEAR, COMMENTS, CREATEPOST } from './types/types.js';

export default {
  data() {
    return {
      posts: [],
      isLoading: false,
    };
  },
  props: {
    userData: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.isLoading = true;
    getUserPosts(this.userData.id)
      .then((data) => {
        this.posts = data;
      })
      .finally(() => {
        this.isLoading = false;
      });
  },
  setup() {
    const toggleSideBar = inject('toggleSideBar');
    const isOpenSideBar = inject('isOpenSideBar');
    const setSelectedPost = inject('setSelectedPost');
    const selectedPost = inject('selectedPost');
    
    return {
      toggleSideBar,
      isOpenSideBar,
      setSelectedPost,
      selectedPost,
    }
  },
  methods: {
    handleToggle(item) {
      if (this.selectedPost && item.id === this.selectedPost.id) {
        this.toggleSideBar(CLEAR);
        this.setSelectedPost(null)
      } else {
        this.toggleSideBar(COMMENTS);
        this.setSelectedPost(item);
      }
    },
    handleClick() {
      this.toggleSideBar(CREATEPOST);
    },
  }
};
</script>

<template>
  <div class="tile is-parent">
    <div class="tile is-child box is-success">
      <div class="block">
        <div class="block is-flex is-justify-content-space-between">
          <p class="title">Posts</p>
          <button 
            type="button" 
            class="button is-link"
            :class="{'is-light': this.isOpenSideBar.createPost}"
            @click="handleClick"
          >
            Add New Post
          </button>
        </div>
  
        <table class="table is-fullwidth is-striped is-hoverable is-narrow">
          <thead>
            <tr class="has-background-link-light">
              <th>ID</th>
              <th>Title</th>
              <th class="has-text-right">Actions</th>
            </tr>
          </thead>
          <tbody v-for="item in posts" :key="item.id">
            <tr>
              <td>{{ item.id }}</td>
              <td>{{ item.title }}</td>
              <td class="has-text-right is-vcentered">
                <button 
                  type="button" 
                  class="button is-link"
                  :class="{'is-light' : this.isOpenSideBar.comments && selectedPost && selectedPost.id === item.id}"
                  @click="handleToggle(item)"
                >
                {{ selectedPost && this.isOpenSideBar.comments && selectedPost.id === item.id ? 'close' : 'open' }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<style>
</style>