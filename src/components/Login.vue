<script>  
  import { inject } from 'vue';
import { client } from '../utils/fetchClient';
  import Loader from './loader/Loader.vue';
  import NeedToRegister from './NeedToRegister.vue';
  
  export default {
    components: {
      NeedToRegister,
      Loader,
    },
    data() {
      return {
        user: {
          name: '',
          email: '',
        },
        mustRegister: false,
        isError: false,
        isLoading: false
      }
    },
    setup () {
      const setUserData = inject('setUserData');
      return {
        setUserData,
      }
    },
    methods : {
      handleSubmit() {
        this.isLoading = true
        client.get(`/users?email=${this.user.email}`).then(data => {
          if (data.length > 0) {
            this.setUserData(data[0])
          } else if (this.mustRegister === false) {
            this.mustRegister = true;
          } else {
            client.post(`/users`,this.user).then(data => {
              this.setUserData(data);
            });
          }        
        }).finally(() => this.isLoading = false);
      },
    },
  }
</script>

<template>
  <section class="container is-flex is-justify-content-center">
    <form @submit.prevent="handleSubmit" class="box mt-5">
      <h1 class="title is-3" v-if="mustRegister">You need to register</h1>

      <h1 class="title is-3" v-if="!mustRegister">Get your userId</h1>

      <div class="field">
        <label class="label" htmlFor="user-email"> Email </label>
  
        <div 
          class="control has-icons-left"
          :class="{ 'is-loading': isLoading }"
        >
          <input
            type="email"
            id="user-email"
            name="email"
            class="input"
            placeholder="Enter your email"
            v-model="user.email"
            required
            :disabled="mustRegister"
          />
  
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
        </div>
  
        <p class="help is-danger" v-if="isError">error message</p>
      </div>

      <NeedToRegister
        v-model="user.name"
        v-if="mustRegister"
        :isLoading="isLoading"
      />
  
      <div class="field">
        <button 
          type="submit" 
          class="button is-primary" 
          :class="{ 'is-loading': isLoading }"
        >
          {{ mustRegister ? 'Register' : 'Login' }}
        </button>
      </div>
    </form>
  </section>
</template>
 
<style></style>