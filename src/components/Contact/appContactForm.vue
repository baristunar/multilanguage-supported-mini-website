<template>
  <form>
    <v-text-field outlined label="Title"></v-text-field>
    <v-text-field outlined label="Name"></v-text-field>
    <v-text-field outlined label="Email"></v-text-field>
    <v-text-field outlined label="Phone"></v-text-field>
    <v-autocomplete
      outlined
      :items="countryList"
      item-value="id"
      item-text="name"
      label="Country"
    ></v-autocomplete>

    <v-textarea
      outlined
      clearable
      clear-icon="mdi-close-circle"
      no-resize
      label="Text"
    ></v-textarea>
    <v-btn color="success">Send</v-btn>
  </form>
</template>

<script>
export default {
  data() {
    return {
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
};
</script>
