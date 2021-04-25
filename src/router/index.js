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
  let locale = localStorage.getItem("lang") || "en";
  if (!localStorage.getItem("lang")) {
    localStorage.setItem("lang", locale);
  }
  i18n.locale = locale;
  if (to.params.locale === "en" || to.params.locale === "tr") {
    next();
  }
  if (to.params.locale !== "en" && to.params.locale !== "tr") {
    console.log("test", to.params.locale);

    next("/");
  }
});

export default router;
