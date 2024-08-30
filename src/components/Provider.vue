<script>
import { provide, ref} from 'vue';
import { CLEAR, COMMENTS, CREATEPOST } from './types/types';

export default{
  setup() {
    const isOpenSideBar = ref({
      comments: false,
      createPost: false,
    });

    const selectedPost = ref(null);
    const userData = ref(null);
    const PostList = ref([]);

    const toggleSideBar = (state) => {
      switch(state) {
        case CREATEPOST:
          isOpenSideBar.value.comments = false;
          isOpenSideBar.value.createPost = true;
          setSelectedPost(null)
          return;
        case COMMENTS:
          isOpenSideBar.value.comments = true;
          isOpenSideBar.value.createPost = false;
          return;
        case CLEAR :
          isOpenSideBar.value.comments = false;
          isOpenSideBar.value.createPost = false;
          return;
        default:
          return;
      }
    };

    const setSelectedPost = (state)  => {
      selectedPost.value = state;
    }

    const setUserData = (state) => {
      userData.value = state;
    }

    const addItemToList = (item) => {
      PostList.value = [...PostList.value,...item];
    }
    const deleteitemFromList = (id) => {
      PostList.value = PostList.value.filter(item => item.id !== id)
    }

    // Provide state and methods to child components
    provide('isOpenSideBar', isOpenSideBar);
    provide('selectedPost', selectedPost)
    provide('toggleSideBar', toggleSideBar);
    provide('setSelectedPost', setSelectedPost);
    provide('userData', userData);
    provide('setUserData', setUserData);

    return {
      isOpenSideBar,
      selectedPost,
      toggleSideBar,
      setSelectedPost,
      userData,
      setUserData,
    };
  }
}
</script>

<template>
  <slot>
    
  </slot>
</template>
