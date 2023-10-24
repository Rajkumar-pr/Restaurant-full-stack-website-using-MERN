// router.js
// router.js
import { createRouter, createWebHistory } from "vue-router";
import FormType from "@/components/FormType.vue";
import FormSuccess from "@/components/FormSuccess.vue";
import FormDesign from "@/components/FormDesign.vue";
import FormBehaviour from "@/components/FormBehaviour.vue";
import Formva from "@/components/Formva.vue"
import FormTargeting from  "@/components/FormTargeting.vue"
const routes = [
  { path: "/", component: FormType },
  { path: "/success", component: FormSuccess },
  { path: "/design", component: FormDesign },
  { path: "/behaviour", component: FormBehaviour },
  { path: "/beha", component: Formva },
  { path: "/target", component: FormTargeting},
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
