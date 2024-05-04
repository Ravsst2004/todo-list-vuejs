import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import * as Vue from "vue"; // in Vue 3
import axios from "axios";
import VueAxios from "vue-axios";

// Tailwind css
import "./assets/css/index.css";

// Dayjs
import dayjs from "dayjs";

// Font awesome
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App);

app.use(VueAxios, axios);
app.use(router);

app.config.globalProperties.$dayjs = dayjs;
app.mount("#app");
