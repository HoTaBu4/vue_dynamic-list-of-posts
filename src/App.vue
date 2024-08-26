<script>
  import Login from './components/Login.vue';
  import Header from './components/Header.vue';
  import PostsList from './components/PostsList.vue';
  import SideBar from './components/SideBar.vue';
  import Provider from './components/Provider.vue';

  export default {
    components : {
      Login,
      Header,
      PostsList,
      SideBar,
      Provider,
    },
    
    data() {
      return {
        userData: null,
        isOpenSideBar: {
          createPost: false,
          comments:false,
        },
      }
    },
    methods: {
      updateUser(state) {
        this.userData = state
      },
      toggleSideBar(state) {
        this.isOpenSideBar = state
      }
    },
  }

</script>

<template>
  <Login  
    v-if="!userData"
    :formSubmitted="updateUser"
  />
  
  <Header 
    v-if="userData"  
    :userData
    :updateUser
  />
  <main 
    v-if="userData"
    class="section"
  >
    <div class="container">
      <div class="tile is-ancestor">
        <Provider>
          <PostsList 
            :userData
          />
          <SideBar :isOpenSideBar/>
        </Provider>
      </div>
    </div>
  </main>
  
</template>

<style scoped>

</style>
