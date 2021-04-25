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
  let locale = to.params.locale;
  localStorage.setItem("lang", locale);

  if (locale !== "en" || locale !== "tr") {
    locale = "en";
  }
  i18n.locale = localStorage.getItem("lang") || locale;
  if (from.path !== "/" && to.name) {
    next();
  }
  if (from.path === "/") {
    next();
  }
});

export default router;
