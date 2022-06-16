<template>
  <div class="about">
    <h1>This is an about counter: {{ store.state.counter }}</h1>
  </div>
</template>
<script>
import { inject } from "vue";

export default {
  setup() {
    const store = inject("store");
    return {
      store,
    };
  },
};
</script>
