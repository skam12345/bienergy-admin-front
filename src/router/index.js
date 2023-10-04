import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login/Login";
import Home from "../views/home/Home";
import Customer01 from "../views/customer/Customer01";
import Customer02 from "../views/customer/Customer02";
import Customer03 from "../views/customer/Customer03";
import Customer04 from "../views/customer/Customer04";
import Customer05 from "../views/customer/Customer05";
import Customer06 from "../views/customer/Customer06";
import Equ01 from "../views/equipment/Equ01";
import Equ02 from "../views/equipment/Equ02";
import Equ03 from "../views/equipment/Equ03";
import Popup from "../views/popup/Popup";
import Product01 from "../views/product/Product01";
import Product02 from "../views/product/Product02";
import Product03 from "../views/product/Product03";
import Promotion01 from "../views/promotion/Promotion01";
import Promotion02 from "../views/promotion/Promotion02";
import Promotion03 from "../views/promotion/Promotion03";
import Promotion04 from "../views/promotion/Promotion04";
import Sale01 from "../views/sale/Sale01";
import Sale02 from "../views/sale/Sale02";
import Setting01 from "../views/setting/Setting01";
import Setting02 from "../views/setting/Setting02";
import Setting03 from "../views/setting/Setting03";
import Setting04 from "../views/setting/Setting04";
import Error from "../views/error/error.vue";
// import { createRouter, createWebHistory } from "vue-router";

Vue.use(VueRouter);

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

// const requireAuth = () => (to, from, next) => {
//   if (localStorage.getItem("auto_admin_no")) {
//     return next();
//   } else {
//     if (sessionStorage.getItem("admin_no")) {
//       return next();
//     }
//     alert("잘못된 접근입니다. 로그인 해주세요");
//     next("/");
//   }
// };
const routes = [
  {
    path: "/",
    component: Login,
    name: "Login",
  },
  {
    path: "/error",
    component: Error,
    name: "Error",
  },
  {
    path: "/Home",
    component: Home,
    // beforeEnter: requireAuth(),
  },
  {
    path: "/Sale01",
    component: Sale01,
    // beforeEnter: requireAuth(),
  },
  {
    path: "/Sale02",
    component: Sale02,
    // beforeEnter: requireAuth(),
  },
  {
    path: "/Customer01",
    component: Customer01,
    // beforeEnter: requireAuth(),
  },
  {
    path: "/Customer02",
    component: Customer02,
    // beforeEnter: requireAuth(),
  },
  {
    path: "/Customer03",
    component: Customer03,
    // beforeEnter: requireAuth(),
  },
  {
    path: "/Customer04",
    component: Customer04,
    // beforeEnter: requireAuth(),
  },
  {
    path: "/Customer05",
    component: Customer05,
    // beforeEnter: requireAuth(),
  },
  {
    path: "/Customer06",
    component: Customer06,
    // beforeEnter: requireAuth(),
  },
  {
    path: "/Equ01",
    component: Equ01,
    // beforeEnter: requireAuth(),
  },
  {
    path: "/Equ02",
    component: Equ02,
    // beforeEnter: requireAuth(),
  },
  {
    path: "/Equ03",
    component: Equ03,
    // beforeEnter: requireAuth(),
  },
  {
    path: "/Popup",
    component: Popup,
    // beforeEnter: requireAuth(),
  },
  {
    path: "/Product01",
    component: Product01,
    // beforeEnter: requireAuth(),
  },
  {
    path: "/Product02",
    component: Product02,
    // beforeEnter: requireAuth(),
  },
  {
    path: "/Product03",
    component: Product03,
    // beforeEnter: requireAuth(),
  },
  {
    path: "/Promotion01",
    component: Promotion01,
    // beforeEnter: requireAuth(),
  },
  {
    path: "/Promotion02",
    component: Promotion02,
    // beforeEnter: requireAuth(),
  },
  {
    path: "/Promotion03",
    component: Promotion03,
    // beforeEnter: requireAuth(),
  },
  {
    path: "/Promotion04",
    component: Promotion04,
    // beforeEnter: requireAuth(),
  },
  {
    path: "/Setting01",
    component: Setting01,
    // beforeEnter: requireAuth(),
  },
  {
    path: "/Setting02",
    component: Setting02,
    name: "Setting02",
    // beforeEnter: requireAuth(),
  },
  {
    path: "/Setting03",
    component: Setting03,
    // beforeEnter: requireAuth(),
  },
  {
    path: "/Setting04",
    component: Setting04,
    // beforeEnter: requireAuth(),
  },
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
});

export default router;
