<template>
    <section class="dicas-seguranca-informacao">
      <h1>Segurança</h1>
      <div class="videos-list">
        <div v-for="(video, index) in itensVideos" :key="index" @click="loadVideo(video.id)">
          {{ video.nome }}
        </div>
      </div>
      <div class="video-container">
        <div id="player"></div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    /* global YT */
    name: "DicasSeguranca",
    data() {
      return {
        itensVideos: [
          {
            nome: "Segurança da Informação",
            id: "SRXH9AbT280",
            descricao:
              "A Segurança da Informação protege dados e sistemas contra acessos não autorizados.",
          },
          {
            nome: "Sistema de Chamado",
            id: "dQw4w9WgXcQ",
            descricao: "O Sistema de Chamado permite o registro e acompanhamento de solicitações.",
          },
          {
            nome: "Documentação",
            id: "kJQP7kiw5Fk",
            descricao: "Documentação e manutenção de sistemas.",
          },
        ],
        player: null,
      };
    },
    mounted() {
      // Carregar a API do YouTube assim que o componente for montado
      if (window.YT) {
        this.createPlayer();
      } else {
        window.onYouTubeIframeAPIReady = () => {
          this.createPlayer();
        };
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(script);
      }
    },
  
    methods: {
      loadVideo(videoId) {
        // Carregar o vídeo no player
        this.player.loadVideoById(videoId);
      },
      createPlayer() {
        // Inicializa o player com o primeiro vídeo
        this.player = new YT.Player("player", {
          height: "315",
          width: "560",
          videoId: this.itensVideos[0].id, // Inicializa com o primeiro vídeo
          events: {
            onReady: this.onPlayerReady,
            onStateChange: this.onPlayerStateChange,
          },
        });
      },
      onPlayerReady() {
        console.log("Player está pronto");
      },
      onPlayerStateChange() {
  // A lógica sem usar a variável event
  console.log('O vídeo terminou');
}
,
    },
  };
  </script>
  
  <style scoped lang="scss">
  .dicas-seguranca-informacao {
    .videos-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
      cursor: pointer;
    }
  
    .video-container {
      margin-top: 20px;
    }
  }
  </style>
  