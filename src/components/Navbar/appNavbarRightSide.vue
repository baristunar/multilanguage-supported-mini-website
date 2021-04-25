<template>
  <div>
    <v-layout class="justify-end d-none d-md-flex align-center">
      <div v-for="link in navLinks" :key="link.title">
        <router-link class="mr-3 link" :to="link.to">{{
          $t(link.title)
        }}</router-link>
      </div>

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
  data() {
    return {
      navLinks: [
        { title: "nav.home", to: "/" },
        {
          title: "nav.contactUs",
          to: `${this.$i18n.locale}/contact-us`,
        },
      ],
    };
  },
};
</script>

<style scoped>
.link {
  text-decoration: none;
}
</style>
