import { createApp } from "vue";
import App from "./App.vue";
import bootstrap from "bootstrap";
import { gsap } from "gsap";

const app = createApp(App);
app.use(bootstrap);
app.use(gsap);

app.mount("#app");
