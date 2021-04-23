<template>
  <v-app>
    <navbar />
    <router-view></router-view>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar";
export default {
  name: "App",

  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>
