<script>
import { ref , provide } from 'vue';

export default{
  setup() {
    const isOpenSideBar = ref({
      comments: false,
      createPost: false,
    });

    const selectedPost = ref(null);

    const toggleSideBar = (post) => {
      selectedPost.value = post;
      isOpenSideBar.value.comments = true;
    };

    // Provide state and methods to child components
    provide('isOpenSideBar', isOpenSideBar);
    provide('selectedPost', selectedPost);
    provide('toggleSideBar', toggleSideBar);

    return {
      isOpenSideBar,
      selectedPost,
    };
  }
}
</script>

<template>
  <slot>
    
  </slot>
</template>
