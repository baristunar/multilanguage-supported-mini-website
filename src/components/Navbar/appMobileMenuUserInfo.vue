<template>
  <v-list-item two-line>
    <v-list-item-content>
      <v-list-item-title>{{ activeUser.email }}</v-list-item-title>
      <v-list-item-subtitle>Logged In</v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  props: {
    activeUser: {
      type: Object,
      required: false,
    },
  },
};
</script>
