<template>
  <div>
    <v-btn small plain depressed @click="setLocale('en')">EN</v-btn>
    <span>|</span>
    <v-btn small plain depressed @click="setLocale('tr')">TR</v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    setLocale(lang) {
      if (lang !== this.$i18n.locale) {
        this.$i18n.locale = lang;
        this.$router.push({ params: { locale: lang } });
        localStorage.setItem("lang", lang);
      }
    },
  },
};
</script>
