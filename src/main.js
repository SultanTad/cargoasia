import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import "./style.css";

import Home from "./pages/Home.vue";
import CargoTransportation from "./pages/CargoTransportation.vue";
import DeliveryFromCities from "./pages/DeliveryFromCities.vue";
import DeliveryExamples from "./pages/DeliveryExamples.vue";
import Services from "./pages/Services.vue";
import ServicePage from "./pages/ServicePage.vue";
import AboutCompany from "./pages/AboutCompany.vue";
import CreateOrder from "./pages/CreateOrder.vue";
import Contacts from "./pages/Contacts.vue";
import Layout from "./pages/Layout.vue"
import DeliveryExamplesClothing from "./pages/DeliveryExamplesClothing.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/:city?",
      name: "Layout",
      component: Layout,
      children: [
        {
          path: "/:city?/",
          name: "Home",
          component: Home,
        },
        {
          path: "gruzoperevozki",
          name: "CargoTransportation",
          component: CargoTransportation,
        },
        {
          path: ":id?",
          name: "DeliveryFromCities",
          component: DeliveryFromCities,
        },
        {
          path: "examples/dostavka-odezhdy-iz-kitaya-v-rossiyu-optom/",
          name: "DeliveryExamples",
          component: DeliveryExamples,
        },
        {
          path: "examples/dostavka-oborudovaniya-iz-kitaya/",
          name: "DeliveryExamplesClothing",
          component: DeliveryExamplesClothing,
        },
        {
          path: "services",
          name: "Services",
          component: Services,
        },
        {
          path: "services/poisk-postavshchika-v-kitae/",
          name: "ServicePage",
          component: ServicePage,
        },
        {
          path: "about",
          name: "AboutCompany",
          component: AboutCompany,
        },
        {
          path: "profile",
          name: "CreateOrder",
          component: CreateOrder,
        },
        {
          path: "contacts",
          name: "Contacts",
          component: Contacts,
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (!to.params.city) {
    console.log(to);
    router.push({ name: to.name, params: { city: "msk" } });
  } else next();
});

createApp(App).use(router).mount("#app");
