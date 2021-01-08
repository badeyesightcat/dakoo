<template>
  <div class="insert">
    <input type="text" placeholder="Write your stuff" v-model="memo" />
    <button @click="add">write</button>
  </div>
</template>

<script>
export default {
  name: "Insert",
  data() {
    return {
      memo: ""
    };
  },
  methods: {
    add() {
      const newMemo = {};

      if (this.memo) {
        newMemo.id = Date.now();
        newMemo.text = this.memo;
      }

      this.$store.state.memos.push(newMemo);
      console.log(this.$store.state.memos);
    }
  }
};
</script>

<style scoped>
.insert {
  display: flex;
  justify-content: center;
  border: 2px dashed #aaa;
  border-radius: 0.25rem;
}

input {
  width: 85%;
  border: 0;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
}

button {
  width: 15%;
  border: 0;
  background: #f0f0f0;
  border-radius: 0.25rem;
  font-size: 0.85rem;
}
</style>
