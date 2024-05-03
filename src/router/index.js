import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "todo",
      component: HomeView,
    },
    {
      path: "/done",
      name: "done",
      component: () => import("../views/DoneView.vue"),
    },
    {
      path: "/available",
      name: "available",
      component: () => import("../views/AvailableView.vue"),
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: () => import("../views/Task/DetailView.vue"),
    },
  ],
});

export default router;
