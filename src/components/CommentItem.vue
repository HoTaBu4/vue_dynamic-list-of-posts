<script>
import { deleteComment } from '../api/comments';

export default {
  props : {
    comment : {
      type: Object,
      required : true,
    },
    deleteComment : {
      type: Function
    }
  },
  // methods: {
  //   deleteComment() {
  //     this.$emit('delete-comment', this.comment);
  //   },
  // },
}
</script>

<template>
  <article class="message is-small">
    <div class="message-header">
      <a :href="`mailto:${comment.email}`"> {{ comment.email }} </a>
      <button 
        type="button" 
        class="delete is-small" 
        aria-label="delete"
        @click="deleteComment(comment)"
      >
        delete button
      </button>
    </div>
    <div class="message-body">{{ comment.body }}</div>
  </article>
</template>

<style>
</style>