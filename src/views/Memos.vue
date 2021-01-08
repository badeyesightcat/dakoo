<template>
  <ul class="memos">
    <li v-for="memo in memos" :key="memo.id">
      {{ memo.text }}
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    memos() {
      return this.$store.state.memos;
    }
  }
};
</script>

<style>
.memos {
  list-style-type: none;
}
</style>
