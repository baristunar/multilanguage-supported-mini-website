<template>
  <div>
    <v-layout class="justify-end d-none d-md-flex align-center">
      <router-link class="mr-3 link" to="/">Homepage</router-link>
      <router-link class="mr-3 link" to="/contact-us">Contact Us</router-link>
      <app-login v-if="!activeUser" />
      <app-drop-down-menu v-else :activeUser="activeUser" />

      <btn-localization />
    </v-layout>
  </div>
</template>

<script>
import appLogin from "@/components/Navbar/appLogin";
import appDropDownMenu from "@/components/Navbar/appDropDownMenu";
import btnLocalization from "@/components/ButtonGroups/btnLocalization";
export default {
  components: {
    appLogin,
    appDropDownMenu,
    btnLocalization,
  },
  props: {
    activeUser: {
      type: Object,
      required: false,
    },
  },
};
</script>

<style scoped>
.link {
  text-decoration: none;
}
</style>
