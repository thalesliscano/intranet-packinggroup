<template lang="pug">
.documentacao-container
    SessaoUmDocumento
</template>
]
<script>
import SessaoUmDocumento from "../components/Documentacao/SessaoUmDocumento.vue"
export default{
    name: "PageDocumentacao",
    components: {
        SessaoUmDocumento
    }
}
</script>

<style lang="scss">
.documentacao-container{
    margin-top: 50px;
}
</style>