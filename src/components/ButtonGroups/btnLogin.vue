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
                :rules="[rules.required]"
                class="mb-5"
                v-model="loginData.title"
                :label="$t('form.title')"
                hide-details
                dense
                outlined
              ></v-text-field>
              <v-text-field
                :rules="[rules.required]"
                class="mb-5"
                v-model="loginData.name"
                :label="$t('form.name')"
                hide-details
                dense
                outlined
              ></v-text-field>

              <v-text-field
                :rules="[rules.required, rules.email]"
                class="mb-5 border-error"
                v-model="loginData.email"
                :label="$t('form.email')"
                hide-details
                dense
                outlined
              ></v-text-field>
              <v-text-field
                :rules="[rules.required]"
                class="mb-5"
                v-model="loginData.password"
                :label="$t('form.password')"
                hide-details
                type="password"
                dense
                outlined
              ></v-text-field>
              <v-alert v-if="alertActive" type="error">{{
                alertMessage
              }}</v-alert>

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
      alertMessage: null,
      alertActive: false,
      loginData: {
        title: null,
        name: null,
        email: null,
        password: null,
      },
      rules: {
        required: (value) => !!value || "Required.",
        counter: (value) => value.length <= 20 || "Max 20 characters",
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
    };
  },
  methods: {
    login(dialog) {
      if (this.fieldValidate()) {
        if (this.emailValidate()) {
          this.$store.commit("user/setActiveUser", { ...this.loginData });
          dialog.value = false;
        } else {
          this.alertMessage = this.$t("form.alertMessages.emailError");
          this.alertActive = true;
        }
      } else {
        this.alertMessage = this.$t("form.alertMessages.fieldError");
        this.alertActive = true;
      }
    },
    fieldValidate() {
      const title = this.loginData.title;
      const name = this.loginData.name;
      const email = this.loginData.email;
      const password = this.loginData.password;
      if (title && name && email && password) return true;
      return false;
    },
    emailValidate() {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return pattern.test(this.loginData.email);
    },
  },
  watch: {
    alertActive() {
      if (this.alertActive) {
        setTimeout(() => {
          this.alertActive = false;
          this.alertMessage = null;
        }, 2000);
      }
    },
  },
};
</script>


<style>
.border-error {
  border-color: red !important;
}
</style>