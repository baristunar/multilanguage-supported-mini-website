<template>
  <v-row class="d-flex justify-center align-center">
    <v-col xs="12" md="6">
      <v-card shaped outlined elevation="2" class="pa-5 my-5">
        <v-card-title>
          <v-avatar> <v-icon color="primary"> mdi-email</v-icon></v-avatar>
          Contact Us
        </v-card-title>

        <v-card-text>
          <app-contact-form :activeUser="activeUser" />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import appContactForm from "@/components/Contact/appContactForm";
import { mapGetters } from "vuex";
export default {
  components: {
    appContactForm,
  },
  computed: {
    ...mapGetters({
      activeUser: "user/getActiveUser",
    }),
  },
};
</script>
