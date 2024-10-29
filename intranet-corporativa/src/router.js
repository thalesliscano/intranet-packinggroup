import Vue from "vue";
import Router from 'vue-router';
import PageHome from "./views/Home.vue";
import PageDocumentacao from "./views/Documentacao.vue";
import PageSesmt from "./views/Sesmt.vue";
import PageRh from "./views/Rh.vue";
import PageTreinamento from "./views/Treinamento.vue"

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
            path: "/documentacao",
            name: "TI",
            component: PageDocumentacao,
        },
        {
            path: "/treinamentos",
            name: "TREINAMENTOS",
            component: PageTreinamento
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