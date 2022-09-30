import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import routesFromPages from "~pages";
// import simple from "./pages/simple.vue";
// import index from "./pages/index.vue";
// import liste from "./pages/liste.vue";
// import listeJS from "./pages/listeJSon.vue";
// import listeFetch from "./pages/listeFetch.vue";
import { plugin, defaultConfig } from "@formkit/vue";
// import news from './pages/edit/new.vue'
// import listeSupabase from './pages/listeSupabase.vue'
// import logout from './pages/logout.vue'
// import logIn from './pages/logIn.vue'

import "./index.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // possible d'ajouter ses propres routes
    // en plus de celles faites automatiquement
    ...routesFromPages,
    // {
    //   path: '/index',
    //   name: 'index',
    //   component: index
    // },
    // {
    //   path: '/simple',
    //   name: 'simple',
    //   component: simple
    // },
    // {
    //   path: '/liste',
    //   name: 'liste',
    //   component: liste
    // },
    // {
    //   path: '/listeJS',
    //   name: 'listeJS',
    //   component: listeJS
    // },
    // {
    //   path: '/listeFetch',
    //   name: 'listeFetch',
    //   component: listeFetch
    // },
    // {
    //   path: '/news',
    //   name: 'news',
    //   component: news
    // },
    // {
    //   path: '/listeSupabase',
    //   name: 'listeSupabase',
    //   component: listeSupabase
    // },
    // {
    //   path: '/logout',
    //   name: 'logout',
    //   component: logout
    // },
    // {
    //   path: '/logIn',
    //   name: 'logIn',
    //   component: logIn
    // },
  ],
});

const app = createApp(App);
app.use(router);
app.use(plugin, defaultConfig);
app.mount("#app");
