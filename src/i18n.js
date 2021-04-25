import en from "./locales/en.json";
import tr from "./locales/tr.json";

import Vue from "vue";
import VueI18n from "vue-i18n";
/* import store from "./store"; */

Vue.use(VueI18n);

export default new VueI18n({
  locale: localStorage.getItem("lang") || "en",
  messages: {
    en: en,
    tr: tr,
  },
});
