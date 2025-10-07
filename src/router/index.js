import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Galeria from "../views/Galeria.vue";
import Contacto from "../views/Contacto.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/galeria", name: "Galeria", component: Galeria },
  { path: "/contacto", name: "Contacto", component: Contacto },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
