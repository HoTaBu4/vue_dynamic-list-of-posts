<script>
export default{
  props : {
    modelValue : {
      type: String,
    },
    title : {
      type: String,
    },
    placeHolder : {
      type :String
    }
  },
  data() {
    return {
      isError : false
    }
  }
  
}
</script>

<template>
  <div class="field" data-cy="BodyField">
  <label 
    class="label" 
    :htmlFor="`comment-${title}`"
  > 
    {{ title }}
  </label>
  <div class="control">
    <textarea
      :id="`comment-${title}`"
      :name="title"
      class="textarea"
      :class="{'is-danger' : isError}"
      :placeholder="placeHolder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    ></textarea>
  </div>

  <p 
    class="help is-danger" 
    data-cy="ErrorMessage"
    v-if="isError"
  >
    error text
  </p>
</div>
</template>



<style>
</style>