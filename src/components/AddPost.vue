<script>
import { inject } from 'vue';
import InputField from './inputField.vue';
import TextAreaField from './textAreaField.vue';
import { setPost } from '../api/posts';
import { CLEAR } from './types/types';

export default{
  data () {
    return {
      title: '',
      body: '',
      isLoading: false,
    }
  },
  components: {
    InputField,
    TextAreaField,
  },
  setup () {
    const userData = inject('userData');
    const toggleSideBar = inject('toggleSideBar');
    return {
      userData,
      toggleSideBar,
    }
  },
  methods: {
    handleSubmit() {
      this.isLoading = true;
      setPost({"title" : this.title,"bdy" :this.body, "userdId": this.userData.id}).then((data) => {
        console.log(data)
      }).finally(() => {
        this.isLoading = false
      });
    },
    handleCloseSideBar () {
      this.toggleSideBar(CLEAR);
    }
  }
}
</script>

<template>
  <div className="content">
    <h2>create new post</h2>

    <form @submit.prevent="handleSubmit">
      <InputField 
        v-model="title"
        :title="'Title'"
        :placeHolder="'Post title'"
      />
      <TextAreaField 
        v-model="body"
        :title="'Write post body'"
        :placeHolder="'Post body'"
      />

      <div className="field is-grouped">
        <div className="control">
          <button type="submit" className="button is-link">Save</button>
        </div>
        <div className="control">
          <button 
            @click="handleCloseSideBar" 
            className="button is-link is-light"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  </div>
</template>


<style>
</style>