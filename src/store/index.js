import { reactive, readonly } from "vue";

const state = reactive({
  counter: 0,
  textColor: "red",
});
const methods = {
  increase() {
    state.counter++;
  },
  decrease() {
    state.counter--;
  },
  setColorCode(val) {
    state.textColor = val;
  },
};
const getters = {
  counterSquared() {
    return state.counter * state.counter;
  },
};
export default {
  state: readonly(state),
  methods,
  getters,
};
