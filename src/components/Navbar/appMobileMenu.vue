<template>
  <v-list dense>
    <app-mobile-menu-user-info v-if="activeUser" :activeUser="activeUser" />
    <v-divider v-if="activeUser"></v-divider>
    <app-mobile-menu-links :activeUser="activeUser" />
  </v-list>
</template>

<script>
import appMobileMenuLinks from "@/components/Navbar/appMobileMenuLinks";
import appMobileMenuUserInfo from "@/components/Navbar/appMobileMenuUserInfo";
export default {
  components: {
    appMobileMenuLinks,
    appMobileMenuUserInfo,
  },
  props: {
    activeUser: {
      type: Object,
      required: false,
    },
  },
};
</script>
