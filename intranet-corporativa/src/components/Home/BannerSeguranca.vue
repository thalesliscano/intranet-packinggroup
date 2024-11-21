<template lang="pug">
.banner-seguranca
  ul.container-lista-dicas
    li(v-for="(item, index) in conteudoDicas" :key="index" class="item-dica")
      .conteudo-dicas(
        :style="{ backgroundImage: `url(${item.defaultImage})`, backgroundSize: item.backgroundSize, backgroundPosition: item.position }"
        :data-hover="item.hoverImage"
      )
        button.button-dica Clique aqui

  </template>
  
  <script>
export default {
  name: "BannerSeguranca",
  data() {
    return {
      conteudoDicas: [
        {
          defaultImage: require("../../assets/banner-seguranca.jpg"),
          hoverImage: require("../../assets/img3.png"),
          backgroundSize: "100% 100%",
          position: "center",
        },
        {
          defaultImage: require("../../assets/banner-seguranca.jpg"),
          hoverImage: require("../../assets/img3.png"),
          backgroundSize: "100% 100%",
          position: "center",
        },
        {
          defaultImage: require("../../assets/banner-seguranca.jpg"),
          hoverImage: require("../../assets/img3.png"),
          backgroundSize: "100% 100%",
          position: "center",
        },
      ],
    };
  },
};

  </script>
  
  <style lang="scss" scoped>
.banner-seguranca {
  margin: 0 auto;
  width: 1000px;

  .container-lista-dicas {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    list-style: none;

    .item-dica {
      border: 3px solid;
      width: 250px;
      height: 250px;
      display: flex;
      border-radius: 10px;
      justify-content: center;
      align-items: center;

      .conteudo-dicas {
        background-color: blue;
        border-radius: 10px;
        width: 245px;
        height: 245px;
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

        .button-dica {
          align-self: flex-end;
          margin-top: 20px;
        }
      }

      &:hover .conteudo-dicas {
        background-image: attr(data-hover url);
      }
    }
  }
}


  </style>
  