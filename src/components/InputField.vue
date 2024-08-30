<script>
export default {
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    placeHolder: {
      type: String,
    },
    title : {
      type: String,
      required: true,
    }
  },
  data () {
    return {
      isError: false,
    }
  }
}
</script>

<template>
  <div class="field" data-cy="NameField">
    <label 
      class="label" 
      :htmlFor="`comment-author-name-${title}`"
    >
      {{ title }}
    </label>
    <div class="control has-icons-left has-icons-right">
      <input
        type="text"
        :name="title"
        :id="`comment-author-name-${title}`"
        class="input"
        :class="{'is-danger' : isError}"
        :placeholder="placeHolder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <span class="icon is-small is-left">
        <i class="fas fa-user"></i>
      </span>

      <span
        class="icon is-small is-right has-text-danger"
        data-cy="ErrorIcon"
        v-if="isError"
      >
        <i class="fas fa-exclamation-triangle"></i>
      </span>
    </div>

    <p 
      class="help is-danger" 
      data-cy="ErrorMessage"
      v-if="this.isError"
    >
      error text
    </p>
  </div>
</template>

<style>
</style>