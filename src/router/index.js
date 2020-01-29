import Vue from "vue";
import VueRouter from "vue-router";

import Header from "../components/Header";

import Home from "../components/Home";
import User from "../components/Users";

import UserStart from "../components/UserStart";
import UserEdit from "../components/UserEdit";
import UserDetail from "../components/UserDetail";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    components: {
      default: Home,
      top: Header
    },
    beforeEnter: (to, from, next) => {
      console.log("From Home", to, from);
      next();
    }
  },
  {
    path: "/user",
    components: {
      default: User,
      bottom: Header
    },
    children: [
      {
        path: "",
        component: UserStart
      },
      { path: ":id", component: UserDetail, props: true },
      {
        path: ":id/edit",
        component: UserEdit,
        props: route => ({
          id: route.params.id,
          a: route.query.a,
          b: route.query.b
        }),
        name: "UserEdit"
      }
    ]
  },
  {
    path: "/test",
    components: {
      default: Home,
      top: Header
    }
  },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to) {
    // console.log(to);
    // console.log(from);
    // console.log(savedPosition);
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  console.log(to, from);
  next();
});

export default router;
