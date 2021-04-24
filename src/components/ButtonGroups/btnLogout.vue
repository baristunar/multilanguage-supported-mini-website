<template>
  <v-btn depressed small rounded color="primary" @click="logout">Logout</v-btn>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.commit("user/setActiveUser", null);
    },
  },
};
</script>
