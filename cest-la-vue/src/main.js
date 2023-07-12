import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from "./router";
import App from "./App.vue";

const app = createApp(App);
const pinia = createPinia();
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

app.use(router);
app.use(pinia);
app.mount("#app");
