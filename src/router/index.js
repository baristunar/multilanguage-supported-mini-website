import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import i18n from "../i18n";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: i18n.locale,
  },
  {
    path: "/:locale",
    component: {
      render(c) {
        return c("router-view");
      },
    },
    children: [
      {
        path: "",
        name: "home",
        component: Home,
      },
      {
        path: "contact-us",
        name: "contactUs",

        component: () => import("../views/Contact.vue"),
      },
      {
        name: "NotFound",
        path: "*",
        component: () => import("../views/NotFound.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.params.locale === "en" || to.params.locale === "tr") {
    i18n.locale = to.params.locale;
    localStorage.setItem("lang", to.params.locale);

    next();
  }
  if (to.params.locale !== "en" && to.params.locale !== "tr") {
    next("/");
  }
});

export default router;
