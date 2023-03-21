import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/Home.vue";
import ApartmentIndex from "./pages/Apartments/Index.vue";
import ApartmentShow from './pages/Apartments/Show.vue';

// ... import di altri componenti

const router = createRouter({
  // Serve ad indicare come gestire l'url al cambio pagina
  history: createWebHistory(),
  routes: [
    {
      path: "/", // uri da scrivere nel browser
      name: "home", // nome della rotta da usare per creare un link
      component: HomePage // componente che ritorna l'html della pagina
    },
    {
      path: '/apartments',
      name: 'apartments.index',
      component: ApartmentIndex
    },
    {
      path: '/apartments/:id',
      name: 'apartments.show',
      component: ApartmentShow
    },

  ]
});

export { router };