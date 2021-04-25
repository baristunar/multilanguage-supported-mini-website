<template>
  <form>
    <v-text-field
      outlined
      :label="$t('form.title')"
      v-model="contactForm.title"
    ></v-text-field>
    <v-text-field
      outlined
      :label="$t('form.name')"
      v-model="contactForm.name"
    ></v-text-field>
    <v-text-field
      outlined
      :label="$t('form.email')"
      v-model="contactForm.email"
    ></v-text-field>
    <v-text-field
      outlined
      :rules="[rules.phone]"
      :label="$t('form.phone')"
      v-model="contactForm.phone"
      hint="5554443322"
    ></v-text-field>
    <v-autocomplete
      v-model="contactForm.country"
      outlined
      :items="$t('countryList')"
      item-value="id"
      item-text="name"
      :label="$t('form.country')"
    ></v-autocomplete>

    <v-textarea
      v-model="contactForm.text"
      outlined
      clearable
      clear-icon="mdi-close-circle"
      no-resize
      :label="$t('form.description')"
    ></v-textarea>
    <v-alert v-if="alertActive" type="error">{{ alertMessage }}</v-alert>
    <v-btn color="success" @click="submitForm">{{ $t("buttons.send") }}</v-btn>
  </form>
</template>

<script>
export default {
  props: {
    activeUser: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      rules: {
        phone: (value) => {
          const pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
          return this.fieldValidate() ? pattern.test(value) : true;
        },
      },
      alertMessage: null,
      alertActive: false,
      contactForm: {
        title: null,
        name: null,
        email: null,
        phone: null,
        country: null,
        text: null,
      },
    };
  },
  methods: {
    submitForm() {
      if (this.fieldValidate()) {
        if (!this.emailValidate()) {
          this.alertMessage = this.$t("form.alertMessages.emailError");
          this.alertActive = true;
        } else if (!this.phoneValidate()) {
          this.alertMessage = this.$t("form.alertMessages.phoneError");
          this.alertActive = true;
        } else if (this.phoneValidate() && this.emailValidate()) {
          console.log("axios.post('apiUrl'/, {...this.contactForm})", {
            ...this.contactForm,
          });
          this.clearFormData();
        }
      } else {
        this.alertMessage = this.$t("form.alertMessages.fieldError");
        this.alertActive = true;
      }
    },
    clearFormData() {
      this.contactForm = {
        title: null,
        name: this.activeUser ? this.activeUser.name : null,
        email: this.activeUser ? this.activeUser.email : null,

        phone: null,
        country: null,
        text: null,
      };
    },
    changeFormData() {
      if (this.activeUser) {
        this.contactForm.name = this.activeUser.name;
        this.contactForm.email = this.activeUser.email;
      }
    },
    phoneValidate() {
      const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      if (this.contactForm.phone.match(phoneno)) return true;
      return false;
    },
    fieldValidate() {
      const title = this.contactForm.title;
      const name = this.contactForm.name;
      const email = this.contactForm.email;
      const phone = this.contactForm.phone;
      const country = this.contactForm.country;
      const text = this.contactForm.text;
      if (title && name && email && text && phone && country) return true;
      return false;
    },
    emailValidate() {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return pattern.test(this.contactForm.email);
    },
  },
  mounted() {
    this.changeFormData();
  },
  watch: {
    activeUser() {
      if (this.activeUser) {
        this.changeFormData();
      }
    },
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
