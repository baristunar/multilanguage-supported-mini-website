<template>
  <header>
    <v-app-bar height="100px" app>
      <v-col xs="12" sm="12" md="12" lg="8" xl="8" class="mx-auto">
        <v-row class="d-flex align-center">
          <app-navbar-left-side />
          <app-navbar-right-side :activeUser="activeUser" />
          <v-app-bar-nav-icon
            class="d-md-none"
            @click="navDrawerIsOpen = !navDrawerIsOpen"
          ></v-app-bar-nav-icon>
        </v-row>
      </v-col>
    </v-app-bar>

    <v-navigation-drawer
      fixed
      temporary
      hide-overlay
      right
      v-model="navDrawerIsOpen"
    >
      <app-mobile-menu :activeUser="activeUser" />
    </v-navigation-drawer>
  </header>
</template>

<script>
import appNavbarLeftSide from "@/components/Navbar/appNavbarLeftSide";
import appNavbarRightSide from "@/components/Navbar/appNavbarRightSide";
import appMobileMenu from "@/components/Navbar/appMobileMenu";
import { mapGetters } from "vuex";

export default {
  components: {
    appNavbarLeftSide,
    appNavbarRightSide,
    appMobileMenu,
  },
  data() {
    return {
      navDrawerIsOpen: false,
    };
  },
  computed: {
    ...mapGetters({
      activeUser: "user/getActiveUser",
    }),
  },
};
</script>
