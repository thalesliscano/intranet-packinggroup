<template lang="pug">
section.security-tips
  SessaoUm
  SessaoDois
</template>

<script>
import SessaoUm from "../components/TopicosSeguranca/SessaoUm.vue"
import SessaoDois from "../components/TopicosSeguranca/SessaoDois.vue"
export default {
  components: {
    SessaoUm,
    SessaoDois
  },
  name: 'SecurityTips'
}
</script>

<style lang="scss" scoped>
.security-tips {
  text-align: center;
 
}
</style>
