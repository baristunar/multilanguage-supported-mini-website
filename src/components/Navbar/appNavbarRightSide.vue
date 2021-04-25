<template>
  <div>
    <v-layout class="justify-end d-none d-md-flex align-center">
      <div v-for="link in navLinks" :key="link.title">
        <router-link
          class="mr-3 link"
          type="button"
          active-class="active"
          exact
          :to="{ name: link.to }"
          >{{ $t(link.title) }}</router-link
        >
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
        { title: "nav.home", to: "home" },
        {
          title: "nav.contactUs",
          to: "contactUs",
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
.active {
  color: #000;
}
</style>
