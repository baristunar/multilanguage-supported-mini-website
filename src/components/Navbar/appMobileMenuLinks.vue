<template>
  <div>
    <v-list-item v-for="item in mobileMenuLinks" :key="item.title">
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title
          ><router-link class="link" :to="item.to">{{
            item.title
          }}</router-link></v-list-item-title
        >
      </v-list-item-content>
    </v-list-item>

    <v-list-item class="d-flex justify-center align-center">
      <v-list-item-action
        class="d-flex flex-column align-center justify-center"
      >
        <v-row>
          <btn-localization />
        </v-row>
        <btn-login v-if="!activeUser" class="mt-5" />
        <btn-logout v-else class="mt-5" />
      </v-list-item-action>
    </v-list-item>
  </div>
</template>

<script>
import btnLogout from "@/components/ButtonGroups/btnLogout";
import btnLogin from "@/components/ButtonGroups/btnLogin";
import btnLocalization from "@/components/ButtonGroups/btnLocalization";
export default {
  components: {
    btnLogout,
    btnLogin,
    btnLocalization,
  },
  props: {
    activeUser: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      mobileMenuLinks: [
        { title: "Home", icon: "mdi-home-city", to: "/" },
        {
          title: "Contact Us",
          icon: "mdi-card-account-phone-outline",
          to: "/contact-us",
        },
        { title: "About", icon: "mdi-information-variant", to: "/about" },
      ],
    };
  },
};
</script>
