<script>
import { inject } from 'vue';
import CommentItem from './CommentItem.vue';
import WriteCommentBtn from './WriteCommentBtn.vue'
import { deleteComment, getPostComments } from '../api/comments';
import Loader from './loader/Loader.vue';
import InputField from './inputField.vue';
import TextAreaField from './TextAreaField.vue';

export default {
  data() {
    return {
      comments: [],
      isLoading: false,
      isAdingComment: false,
      formData: {
        name: '',
        email: '',
        body: ''
    },
    }
  },
  setup() {
    const selectedPost = inject('selectedPost');
    return {
      selectedPost,
    }
  },
  components : {
    CommentItem,
    WriteCommentBtn,
    Loader,
    InputField,
    TextAreaField,
  },
  watch: {
    selectedPost: {
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.getComments();
        }
      },
      immediate: true, 
    }
  },
  methods: {
    getComments() {
      this.isLoading = true
      getPostComments(this.selectedPost.id).then((data) => {
        this.comments = data
      }).finally(() => {
        this.isLoading = false
      })
    },
    handleDelComments(comment) {
      const originalIndex = this.comments.findIndex(elem => elem.id === comment.id);

      this.comments = this.comments.filter(elem => elem.id !== comment.id);

      deleteComment(comment.id).catch(() => {
        this.comments.splice(originalIndex, 0, comment);
      });
    },
    handleSubmit() {

    },
    handleIsAdingComment(state) {
      this.isAdingComment = state
      console.log(this.isAdingComment)
    }
  }
}
</script>

<template>
  <div class="block">
    <div
      class="is-flex is-justify-content-space-between is-align-items-center"
    >
      <h2>{{`# ${selectedPost.id} : ${selectedPost.title}`}}</h2>
      <div class="is-flex">
        <span class="icon is-small is-right is-clickable">
          <i class="fas fa-pen-to-square"></i>
        </span>
        <span
          class="icon is-small is-right has-text-danger is-clickable ml-3"
        >
          <i class="fas fa-trash"></i>
        </span>
      </div>
    </div>
    <p data-cy="PostBody">{{ selectedPost.body }}</p>
    <div 
      class="is-flex is-justify-content-center is-align-items-center mt-2"
      v-if="isLoading"
    >
      <Loader />
    </div>
    
    <div 
      v-else-if="comments.length > 0 && !isAdingComment"
      class="block" 
      v-for="comment in comments" 
      :key="comment.id"
    >
      <CommentItem 
        :comment="comment" 
        :deleteComment="handleDelComments"
      />
    </div>
    <div class="block" >
      <div className="block" v-if="comments.length === 0">
        <p className="title is-4">No comments yet</p>
      </div>
      <WriteCommentBtn 
        v-if="!isAdingComment"
        :handleIsAdingComment
      />
      <form
        v-else-if="isAdingComment"
        @submit.prevent="handleSubmit"
      >
        <InputField 
          v-model="formData.name"
          :title="'Author name'"
          :placeHolder="'Name Surname'"
        />
        <InputField 
          v-model="formData.email"
          :title="'Author email'"
          :placeHolder="'Your email'"
        />
        <TextAreaField 
          v-model="formData.body"
          :title="'write post body'"
          :placeHolder="'Comment'"
        />
        <div class="field is-grouped">
          <div class="control">
            <button 
              class="button is-link"
              type="submit"
            >
              add comment
            </button>
          </div>
          <div class="control">
            <button 
              class="button is-link"
              @click="isAdingComment = false"
            >
              cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


<style></style>