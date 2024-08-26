<script>
  export default {
    data () {
      return {
        isError: false,
      }
    },
    props: {
      modelValue: {
        type: String,
        required: true,
      },
      isLoading: {
        type: Boolean,
        default: false,
      }
    },
    methods: {
      updateValue(event) {
        this.$emit('update:modelValue', event.target.value);
      },
    },
    emits: ['update:modelValue']
  }
</script>

<template>
  <div className="field">
    <label className="label" htmlFor="user-name"> Your Name </label>

    <div 
      className="control has-icons-left"
      :class="{ 'is-loading': isLoading }"
    >
      <input
        type="text"
        id="user-name"
        name="name"
        className="input"
        placeholder="Enter your name"
        required
        minlength="{4}"
        :value="modelValue"
        @input="updateValue"
      />

      <span className="icon is-small is-left">
        <i className="fas fa-user" />
      </span>
    </div>

    <p className="help is-danger" v-if="isError">error message</p>
  </div>
</template>

<script>
</script>

<style>
</style>