<template>
  <Insert />
  <Memos />
</template>

<script>
// @ is an alias to /src
import Memos from "./Memos.vue";
import Insert from "./Insert.vue";

export default {
  name: "Home",
  components: {
    Memos,
    Insert
  }
};
</script>
