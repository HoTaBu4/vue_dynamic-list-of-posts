
<script>
import { getUserPosts } from './../api/posts.js';
import { inject } from 'vue';

export default {
  data() {
    return {
      posts: [],
      isLoading: false,
      selectedPost: null,
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
    
    return {
      toggleSideBar,
      isOpenSideBar,
    }
  }
};
</script>

<template>
  <div class="tile is-parent">
    <div class="tile is-child box is-success">
      <div class="block">
        <div class="block is-flex is-justify-content-space-between">
          <p class="title">Posts</p>
          <button type="button" class="button is-link">Add New Post</button>
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
                  :class="{'is-light' : isOpenSideBar.comment && selectedPost.id === item.id}"
                  @click="() => {
                    toggleSideBar({...isOpenSideBar,comment : true});
                    this.selectedPost = item
                  }"
                >
                  Open
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