<template>
  <v-app>
    <Navbar />
    <router-view></router-view>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default {
  name: "App",

  components: {
    Navbar,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
