<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn depressed small rounded color="primary" v-bind="attrs" v-on="on">
        {{ activeUser.name }}
      </v-btn>
    </template>
    <v-list class="d-flex justify-center align-center flex-column">
      <v-list-item>
        <v-list-item-title>{{ activeUser.email }}</v-list-item-title>
      </v-list-item>
      <btn-logout />
    </v-list>
  </v-menu>
</template>

<script>
import btnLogout from "@/components/ButtonGroups/btnLogout";
export default {
  components: {
    btnLogout,
  },
  props: {
    activeUser: {
      type: Object,
      required: false,
    },
  },
};
</script>