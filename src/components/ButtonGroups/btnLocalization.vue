<template>
  <div>
    <v-btn small plain depressed @click="changeToLang('en')">EN</v-btn>
    <span>|</span>
    <v-btn small plain depressed @click="changeToLang('tr')">TR</v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    changeToLang(lang) {
      if (lang !== this.$i18n.locale) {
        this.$i18n.locale = lang;
        localStorage.setItem("lang", lang);
        this.$router.push({ params: { locale: this.$i18n.locale } });
      }
    },
  },
};
</script>