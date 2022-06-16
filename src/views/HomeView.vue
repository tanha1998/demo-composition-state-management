<template>
  <div class="home">
    <div :style="{ color: store.state.textColor }">
      <h3>{{ store.state.counter }}</h3>
    </div>
    <button @click="store.methods.increase">increase</button>
    <button @click="store.methods.decrease">decrease</button>
    <div>
      <h4>
        {{ store.state.counter }} <sup>2</sup> =
        {{ store.getters.counterSquared() }}
      </h4>
    </div>
    <div>
      <input type="text" v-model="colorCode" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { inject, computed } from "vue";
export default {
  name: "HomeView",
  setup() {
    const store = inject("store");

    const colorCode = computed({
      get() {
        return store.state.textColor;
      },
      set(val) {
        store.methods.setColorCode(val);
      },
    });
    return {
      store,
      colorCode,
    };
  },
};
</script>
