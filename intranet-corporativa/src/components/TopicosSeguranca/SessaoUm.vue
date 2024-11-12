<template lang="pug">
section.SessaoUm
  .content
    .text-content
      h1 5 dicas de segurança na internet
      p para não cair em armadilhas
    img(src="../../assets/Imagem1.png" alt="Segurança na internet")
</template>




<script>
export default {
  name: 'SessaoUm'
}
</script>

<style lang="scss" scoped>
.SessaoUm {
  text-align: center;
  
  h1 {
    font-size: 2rem;
    color: #333;
    text-align: center;

  }
  
  p {
    font-size: 1rem;
    color: #666;
    text-align: center;

  }

  .content {
    display: block; /* Alterado de flex para block, pois queremos que a imagem fique abaixo do texto */
    margin-top: 1.5rem;
  }

  .text-content {
    text-align: left;

    h3 {
      font-size: 1.5rem;
      color: #333;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 1rem;
      color: #666;
    }
  }

  img {
    width: 100%; /* A imagem vai ocupar 100% do seu contêiner */
    max-width: 800px; /* Largura máxima de 600px */
    height: auto; /* Manter a proporção da imagem */
    margin-top: 1.5rem; /* Espaço entre o texto e a imagem */
    border-radius: 8px;
  }
}
</style>
