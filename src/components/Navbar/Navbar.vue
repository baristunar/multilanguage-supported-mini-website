<template>
  <header>
    <v-app-bar height="100px" app>
      <v-col sm="12" md="12" lg="8" xl="8" class="mx-auto">
        <v-row class="d-flex align-center">
          <v-layout class="d-flex align-center">
            <v-avatar size="35" class="mr-1">
              <v-img
                width="100px"
                height="50px"
                src="@/assets/coliss.svg"
              ></v-img>
            </v-avatar>
            <v-toolbar-title class="ml-2">Dummy</v-toolbar-title>
          </v-layout>

          <v-layout class="justify-end d-none d-md-flex align-center">
            <router-link class="mr-3 link" to="/">Homepage</router-link>
            <router-link class="mr-3 link" to="/">About</router-link>
            <router-link class="mr-3 link" to="/">Contact Us</router-link>
            <v-btn depressed small rounded color="primary">Login</v-btn>
            <v-btn small plain depressed>EN</v-btn>
            <span>|</span>
            <v-btn small plain depressed>TR</v-btn>
          </v-layout>
          <v-app-bar-nav-icon
            class="d-md-none"
            @click="navDrawerIsOpen = !navDrawerIsOpen"
          ></v-app-bar-nav-icon>
        </v-row>
      </v-col>
    </v-app-bar>

    <v-navigation-drawer absolute temporary right v-model="navDrawerIsOpen">
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>tunarbaris7@gmail.com</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in mobileMenuLinks" :key="item.title">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item class="d-flex justify-center align-center">
          <v-list-item-action
            class="d-flex flex-column align-center justify-center"
          >
            <v-row>
              <v-btn small plain depressed>EN</v-btn>
              <span>|</span>
              <v-btn small plain depressed>TR</v-btn>
            </v-row>

            <v-btn medium rounded color="primary" class="mt-5">Logout</v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navDrawerIsOpen: false,
      mobileMenuLinks: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "Contact Us", icon: "mdi-card-account-phone-outline" },
        { title: "About", icon: "mdi-information-variant" },
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