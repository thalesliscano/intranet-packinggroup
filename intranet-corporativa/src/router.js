import Vue from "vue";
import Router from 'vue-router';
import PageHome from "./views/Home.vue";
import PageDocumentacao from "./views/Documentacao.vue";
import PageTreinamento from "./views/Treinamento.vue";
import TopicosSeguranca from "./views/TopicosSeguranca.vue";
import RansomwarePage from "./views/RansomwarePage.vue";
import FasciculoPage from "./views/FasciculoPage.vue";

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
            path: "/topicos-seguranca",
            name: "TOPICOS-SEGURANCA",
            component: TopicosSeguranca
        },
        {
            path: "/ransomware",
            name: "RANSOMWARE",
            component: RansomwarePage
        },
        {
            path: "/fasciculo",
            name: "FASCICULO",
            component: FasciculoPage
        },
    ]
})

export default router;