import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import AboutUs from "../views/AboutUs.vue";
import Listings from "../views/Listing.vue";
import Resources from "../views/Resources.vue";
import Contribute from "../views/Contribute.vue";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "home",
      path: "/",
      component: Home,
      redirect: "/home",
    },

    { name: "aboutus", path: "/aboutus", component: AboutUs },

    { name: "listings", path: "/joinavia", component: Listings },

    { name: "resources", path: "/resources", component: Resources },

    { name: "contribute", path: "/contribute", component: Contribute },

    { name: "login", path: "/login", component: Login },

    { name: "signup", path: "/signup", component: SignUp },
  ],
});
