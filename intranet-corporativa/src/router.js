import Vue from "vue";
import Router from 'vue-router';
import PageHome from "./views/Home.vue";
import PageTi from "./views/Ti.vue";
import PageSesmt from "./views/Sesmt.vue";
import PageRh from "./views/Rh.vue";

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: "Home",
            component: PageHome
        },
        {
            path: "/ti",
            name: "TI",
            component: PageTi
        },
        {
            path: "/rh",
            name: "RH",
            component: PageRh
        },
        {
            path: "/sesmt",
            name: "Sesmt",
            component: PageSesmt
        },
    ]
})

export default router;