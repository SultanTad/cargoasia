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
import Contacts from "./pages/Contacts.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    {
      path: "/gruzoperevozki",
      name: "CargoTransportation",
      component: CargoTransportation,
    },
    {
      path: "/gruzoperevozki/dostavka-iz-guanchzhou",
      name: "DeliveryFromCities",
      component: DeliveryFromCities,
    },
    {
      path: "/examples/dostavka-odezhdy-iz-kitaya-v-rossiyu-optom/",
      name: "DeliveryExamples",
      component: DeliveryExamples,
    },
    {
      path: "/services",
      name: "Services",
      component: Services,
    },
    {
      path: "/services/arenda-sklada",
      name: "ServicePage",
      component: ServicePage,
    },
    {
      path: "/about",
      name: "AboutCompany",
      component: AboutCompany,
    },
    {
      path: "/contacts",
      name: "Contacts",
      component: Contacts,
    },
  ],
});

createApp(App).use(router).mount("#app");
