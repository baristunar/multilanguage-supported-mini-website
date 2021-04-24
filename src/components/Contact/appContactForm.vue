<template>
  <form>
    <v-text-field
      outlined
      label="Title"
      v-model="contactForm.title"
    ></v-text-field>
    <v-text-field
      outlined
      label="Name"
      v-model="contactForm.name"
    ></v-text-field>
    <v-text-field
      outlined
      label="Email"
      v-model="contactForm.email"
    ></v-text-field>
    <v-text-field
      outlined
      label="Phone"
      v-model="contactForm.phone"
    ></v-text-field>
    <v-autocomplete
      v-model="contactForm.country"
      outlined
      :items="countryList"
      item-value="id"
      item-text="name"
      label="Country"
    ></v-autocomplete>

    <v-textarea
      v-model="contactForm.text"
      outlined
      clearable
      clear-icon="mdi-close-circle"
      no-resize
      label="Text"
    ></v-textarea>
    <v-btn color="success" @click="submitForm">Send</v-btn>
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
      countryList: [
        { id: "TR", name: "Turkey" },
        { id: "US", name: "United States of America" },
        { id: "GB", name: "United Kingdom" },
        { id: "DE", name: "Germany" },
        { id: "SE", name: "Sweden" },
        { id: "KE", name: "Kenya" },
        { id: "BR", name: "Brazil" },
        { id: "ZW", name: "Zimbabwe" },
      ],
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
