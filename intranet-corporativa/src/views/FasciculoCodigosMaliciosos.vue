<template lang="pug">
.fasciculos-codigos-maliciosos
  SessaoUm
  SessaoDois
  SessaoTres
  SessaoQuatro
  SessaoCinco
  SessaoSeis
</template>

<script>
import SessaoUm from '../components/FasciculoCodigosMaliciosos/Sessao1.vue';
import SessaoDois from '../components/FasciculoCodigosMaliciosos/Sessao2.vue';
import SessaoTres from '../components/FasciculoCodigosMaliciosos/Sessao3.vue';
import SessaoQuatro from '../components/FasciculoCodigosMaliciosos/Sessao4.vue';
import SessaoCinco from '../components/FasciculoCodigosMaliciosos/Sessao5.vue';
import SessaoSeis from '../components/FasciculoCodigosMaliciosos/Sessao6.vue';
export default {
  name: "FasciculoCodigosMaliciosos",
  components: {
    SessaoUm,
    SessaoDois,
    SessaoTres,
    SessaoQuatro,
    SessaoCinco,
    SessaoSeis
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