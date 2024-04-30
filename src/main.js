import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Tailwind css
import "./assets/css/index.css";

// Font awesome
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App);

app.use(router);

app.mount("#app");
