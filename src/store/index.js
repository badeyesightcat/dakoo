import { createStore } from "vuex";

export default createStore({
  state: {
    memos: [
      {
        text: "I am trying to learn vuex",
        id: Date.now()
      }
    ]
  },
  mutations: {
    add(state, payload) {
      state.memos.push(payload);
      console.log(state.memos);
    }
  },
  actions: {},
  modules: {}
});
