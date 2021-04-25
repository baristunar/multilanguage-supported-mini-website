<template>
  <v-layout class="d-flex align-center">
    <v-avatar size="35" class="mr-1">
      <v-img width="100px" height="50px" src="@/assets/coliss.svg"></v-img>
    </v-avatar>
    <v-toolbar-title class="ml-2">{{ title }}</v-toolbar-title>
  </v-layout>
</template>
<script>
export default {
  computed: {
    title() {
      if (this.$route.name === "home" || this.$route.name === "NotFound") {
        return "Dummy";
      }
      return this.$t(`nav.${this.$route.name}`);
    },
  },
};
</script>
