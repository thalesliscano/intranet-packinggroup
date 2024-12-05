<template lang="pug">
.banner-seguranca
  h1.titulo Dicas de seguranças
  ul.container-lista-dicas
    li(v-for="(item, index) in conteudoDicas" :key="index" class="item-dica")
      .conteudo-dicas(
        :style="{ backgroundImage: `url(${item.defaultImage})`, backgroundSize: item.backgroundSize, backgroundPosition: item.position }"
        @mouseenter="atualizarHover(index, true)"
        @mouseleave="atualizarHover(index, false)"
      )
        .conteudo
          h2.title-dica(v-if="!item.isHovered" class="fade") {{ item.title }}
          p.descricao-dica(v-else class="fade") {{ item.description }}
          button(@click="navigateTo(item)").button-dica Clique aqui
</template>
  
  
  
<script>
export default {
  name: "BannerSeguranca",
  data() {
  return {
    conteudoDicas: [
      {
        title: "Ransomware",
        description: "Esta é a descrição do item 1 bla bla bla bla bla",
        defaultImage: require("../../assets/img3.png"),
        defaultImageOriginal: require("../../assets/img3.png"), // Aqui fica a imagem padrão original
        hoverImage: require("../../assets/img-default.png"),
        backgroundSize: "100% 100%",
        position: "center",
        isHovered: false,
        link: "/ransomware"
      },
      {
        title: "5 dicas de segurança",
        description: "Esta é a descrição do item 2 sdfd ddkdk",
        defaultImage: require("../../assets/banner-seguranca.jpg"),
        defaultImageOriginal: require("../../assets/banner-seguranca.jpg"),
        hoverImage: require("../../assets/img-default.png"),
        backgroundSize: "100% 100%",
        position: "center",
        isHovered: false,
        link: "/dicas-seguranca"
      },
      {
        title: "Proteção de dados",
        description: "Esta é a descrição do item 3 eba kejlje ekjklj kl he lorem ipsum hffj djdj ",
        defaultImage: require("../../assets/banner-seguranca.jpg"),
        defaultImageOriginal: require("../../assets/banner-seguranca.jpg"),
        hoverImage: require("../../assets/img3.png"),
        backgroundSize: "100% 100%",
        position: "center",
        isHovered: false,
        link: "/fasciculo-codigos-maliciosos"

      },
      {
        title: "Titulo 3",
        description: "Esta é a descrição do item 3 eba kejlje ekjklj kl he lorem ipsum hffj djdj ",
        defaultImage: require("../../assets/banner-seguranca.jpg"),
        defaultImageOriginal: require("../../assets/banner-seguranca.jpg"),
        hoverImage: require("../../assets/img3.png"),
        backgroundSize: "100% 100%",
        position: "center",
        isHovered: false,
        link: "/fasciculo-protecao-de-dados"

      },
      {
        title: "Titulo 3",
        description: "Esta é a descrição do item 3 eba kejlje ekjklj kl he lorem ipsum hffj djdj ",
        defaultImage: require("../../assets/banner-seguranca.jpg"),
        defaultImageOriginal: require("../../assets/banner-seguranca.jpg"),
        hoverImage: require("../../assets/img3.png"),
        backgroundSize: "100% 100%",
        position: "center",
        isHovered: false,
      },
    ],
  };
},
  methods: {
    atualizarHover(index, isHover) {
    const item = this.conteudoDicas[index];
    item.defaultImage = isHover ? item.hoverImage : item.defaultImageOriginal;
    item.isHovered = isHover;
  },
    navigateTo(item) {
        if (item.link.startsWith("http")) {
            // Redirecionar para URLs externas
            window.open(item.link, "_blank"); // "_blank" abre em uma nova aba
        } else {
            // Redirecionar para rotas internas
            this.$router.push(item.link);
        }
    },
  },
};

</script>
  
  <style lang="scss" scoped>
  .banner-seguranca {
    margin: 60px auto;
    width: 1400px;
    .titulo{
      text-align: center;
      margin-bottom: 30px;
    }
    .container-lista-dicas {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
      list-style: none;
  
      .item-dica {
        width: 250px;
        height: 250px;
        display: flex;
        border-radius: 10px;
        justify-content: center;
        align-items: center;
  
        .conteudo-dicas {
           border: 3px solid #0f2034;
          border-radius: 10px;
          width: 250px;
          height: 250px;
          text-align: center;
          display: flex;
          flex-direction: column;
          background-repeat: no-repeat;
          position: relative;
          transition: background-image 0.3s ease;
  
          &::after {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            background-color: #000;
            opacity: 30%;
            top: 0px;
            border-radius: 10px;
            left: 0px;
          }
          .conteudo{
            z-index: 2;
            display: flex;
            flex-direction: column;
            gap: 50px;
            .title-dica, .descricao-dica {
              margin: 0;
              height: 60px;
              display: flex;
              align-items: center;
              justify-content: center;
              overflow: hidden;
              text-align: center;
              padding: 30px;
              color: #fff;
              font-weight: 500;
              animation: fadeSlideIn 0.5s ease forwards; /* Animação padrão de entrada */

              &.fade-out {
                animation: fadeSlideOut 0.5s ease forwards; /* Animação de saída */
              }
            }

  
            .button-dica {
              align-self: flex-end;
              margin: 0 auto 0 auto;
              padding: 10px;
              border-radius: 10px;
              border: transparent;
              background-color: #fff;
              font-weight: 600;
              cursor: pointer;
              &:hover{
                background-color: #0f2034;
                color: #fff;
                border: 1px solid #fff;
              }
            }

          }
        }
        &:hover{
        background-color: #0f2034;
      }
      }
    }
  }
  @keyframes fadeSlideIn {
  from {
    opacity: 0;
    transform: translateY(10px); /* Desliza para cima */
  }
  to {
    opacity: 1;
    transform: translateY(0); /* Posição final */
  }
}

@keyframes fadeSlideOut {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px); /* Desliza para fora */
  }
}

  </style>
  