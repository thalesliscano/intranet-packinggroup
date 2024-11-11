<!-- <template lang="pug">
  .dicas-seguranca-informacao
    h1 Título
    ul.lista-de-itens-informacao
      li.item-informacao(v-for="(item, index) in itens" :key="index")
        .mask
  </template>
  
  <script>
  export default {
    name: "DicasSegurancaInformacao",
    data() {
      return {
        itens: [
          { img: 'caminho/para/imagem1.jpg' },
          { img: 'caminho/para/imagem2.jpg' },
          { img: 'caminho/para/imagem3.jpg' }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .dicas-seguranca-informacao {
    text-align: center;
  }
  
  .lista-de-itens-informacao {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 10px;
    justify-content: center;
  }
  
  .item-informacao {
    width: 200px;
    height: 150px;
    position: relative;
    background-size: cover;
    background-position: center;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .item-informacao .mask::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Define a máscara escura */
    z-index: 1;
  }
  
  .item-informacao .mask {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 2;
  }
  
  .item-informacao:nth-child(1) {
    background-image: url('caminho/para/imagem1.jpg');
  }
  
  .item-informacao:nth-child(2) {
    background-image: url('caminho/para/imagem2.jpg');
  }
  
  .item-informacao:nth-child(3) {
    background-image: url('caminho/para/imagem3.jpg');
  }
  </style>
   -->