<template lang="pug">
.fasciculos-codigos-maliciosos
  SessaoUm
  SessaoDois
</template>

<script>
import SessaoUm from '../components/FasciculoCodigosMaliciosos/Sessao1.vue';
import SessaoDois from '../components/FasciculoCodigosMaliciosos/Sessao2.vue';
export default {
  name: "FasciculoCodigosMaliciosos",
  components: {
    SessaoUm,
    SessaoDois
  }
};
</script>

<style scoped lang="scss">
.fasciculos-codigos-maliciosos{
  width: 100%;
  h1 {
    margin: 100px auto;
    background: red;
  }

}
</style>