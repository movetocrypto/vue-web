import { createApp } from "vue";

// https://animate.style/
import "animate.css";

import "./style.scss";
import App from "./App.vue";

// const title = import.meta.env.VITE_APP_TITLE;
// document.title = title;

const app = createApp(App);

app.mount("#app");
