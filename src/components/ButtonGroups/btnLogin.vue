<template>
  <v-col cols="auto">
    <v-dialog transition="dialog-top-transition" max-width="600">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          depressed
          small
          rounded
          color="primary"
          v-bind="attrs"
          v-on="on"
          >{{ $t("buttons.login") }}</v-btn
        >
      </template>
      <template v-slot:default="dialog">
        <v-card>
          <v-toolbar color="primary" dark
            ><v-icon left>mdi-login </v-icon> {{ $t("form.login") }}</v-toolbar
          >
          <v-card-text class="mt-5">
            <form>
              <v-text-field
                v-model="loginData.title"
                :label="$t('form.title')"
                dense
                outlined
              ></v-text-field>
              <v-text-field
                v-model="loginData.name"
                :label="$t('form.name')"
                dense
                outlined
              ></v-text-field>

              <v-text-field
                v-model="loginData.email"
                :label="$t('form.email')"
                dense
                outlined
              ></v-text-field>
              <v-text-field
                v-model="loginData.password"
                :label="$t('form.password')"
                type="password"
                dense
                outlined
              ></v-text-field>

              <v-btn color="success" @click="login(dialog)">{{
                $t("buttons.login")
              }}</v-btn>
            </form>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn text @click="dialog.value = false">{{
              $t("buttons.close")
            }}</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      loginData: {
        title: null,
        name: null,
        email: null,
        password: null,
      },
    };
  },
  methods: {
    login(dialog) {
      if (this.fieldValidation()) {
        this.$store.commit("user/setActiveUser", { ...this.loginData });
        dialog.value = false;
      }
    },
    fieldValidation() {
      const title = this.loginData.title;
      const name = this.loginData.name;
      const email = this.loginData.email;
      const password = this.loginData.password;
      if (title && name && email && password) return true;
      return false;
    },
  },
};
</script>