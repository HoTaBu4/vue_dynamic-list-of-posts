<script>
  import Login from './components/Login.vue';
  import Header from './components/Header.vue';
  import PostsList from './components/PostsList.vue';
  import SideBar from './components/SideBar.vue';
  import Provider from './components/Provider.vue';
  import { inject } from 'vue';

  export default {
    components : {
      Login,
      Header,
      PostsList,
      SideBar,
    },
    setup() {
      const isOpenSideBar = inject('isOpenSideBar')
      const userData = inject('userData');
      const setUserData = inject('setUserData');

      return {
        isOpenSideBar,
        userData,
        setUserData,
      }
    },
  }

</script>

<template>
  <Login  
    v-if="!userData"
  />
  <Header 
    v-if="userData"  
    :userData
    :setUserData
  />
  <main 
    v-if="userData"
    class="section"
  >
    <div class="container">
      <div class="tile is-ancestor">
        <PostsList 
          :userData
        />
        <SideBar 
          :isOpenSideBar
        />
      </div>
    </div>
  </main> 
</template>

<style scoped>

</style>