<template>
  <v-btn depressed small rounded color="primary" @click="logout">{{
    $t("buttons.logout")
  }}</v-btn>
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
