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
      :label="$t('form.phone')"
      v-model="contactForm.phone"
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
      this.clearFormData();
    },
    clearFormData() {
      this.contactForm = {
        title: null,
        name: this.activeUser.name || null,
        email: this.activeUser.email || null,
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
  },
  mounted() {
    this.changeFormData();
  },
  watch: {
    activeUser() {
      if (this.activeUser) {
        this.changeFormData();
        console.log("watched");
      }
    },
  },
};
</script>
