<script>
import App from './App.vue';
import Provider from './components/Provider.vue';

export default{
  components: {
    Provider,
    App,
  }
}
</script>

<template>
  <Provider>
    <App />
  </Provider>
</template>