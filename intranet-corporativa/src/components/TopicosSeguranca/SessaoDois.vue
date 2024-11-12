<template lang="pug">
  section.SessaoDois
    h2 1. O primeiro sinal de um site seguro
    p
      | O primeiro e principal sinal para saber se um site é seguro é observar se ele possui o certificado de segurança SSL (Secure Socket Layer). Para isso, basta observar a url (endereço do site) e garantir que ela possui o formato HTTPS e se a barra de busca exibe o ícone de um cadeado para sinalizar que o site é seguro, conforme exemplo abaixo:
    
    img(src="../../assets/Imagem2.png" alt="Exemplo SSL" width="800")

    h2 2. Desconfie de ofertas boas demais
    p 
      | Inicialmente, desconfie de ofertas muito abaixo do valor de mercado e que se dizem imperdíveis (como muito acontece na black friday).
    p 
      | Outro ponto importante é atentar-se às tentativas de phishing, prática que tenta confundir o usuário e faz com que ele, sem perceber, forneça dados pessoais (como documentos e senhas) para o fraudador, que se passa pela empresa sem autorização. Lembre-se de que empresas idôneas não solicitam senhas de acesso e dados dos seus clientes por canais não oficiais.

    h2 3. Fique atento a suas senhas
    p 
      | Com tantas informações para lembrar, muitas pessoas optam por usar a mesma senha para diversos serviços. No entanto, essa prática não é recomendada. Isso porque, caso o fraudador descubra essa senha, ele pode ter acesso a todas as suas contas pessoais de uma só vez.
    p
      | Para evitar que isso ocorra, utilize senhas diferentes e para não esquecer guarde-as anotadas em um local seguro. Além disso, ao escolher suas senhas, certifique-se de que elas sejam fortes, contendo números, letras e caracteres especiais, se for possível. Evite datas de aniversário ou números sequenciais que são facilmente descobertos.


    h2 4. Mantenha um antivírus atualizado
    p 
      | O antivírus é um importante aliado da segurança na internet. Existem opções pagas e gratuitas que podem identificar ameaças durante a navegação ou mesmo bloquear o acesso a sites suspeitos.
    p
      | Outra dica importante é não realizar downloads de fontes desconhecidas. Sempre que decidir baixar um aplicativo ou arquivo, certifique-se de que trata-se de uma fonte confiável.


    h2 5. Evite exposição excessiva nas redes sociais
    p 
      | Além de garantir entretenimento, as redes sociais são excelentes ferramentas para vendas online e para iniciar a presença digital do seu negócio. No entanto, quando usadas de forma inadequada elas podem ser fontes valiosas de informação para pessoas mal-intencionadas.
    p 
      | Portanto, redobre a atenção com o conteúdo postado. Evite fazer publicações que revelam detalhes sobre a sua intimidade e da sua família.. Vale também “fazer uma limpa” na lista de seguidores ou amigos e se certificar de que o perfil é acompanhado apenas por pessoas confiáveis.



</template>


<script>
export default {
  name: "SessaoDois",
  data() {
    return {
      // Defina qualquer dado necessário aqui
    };
  }
}
</script>

<style lang="scss" scoped>
.SessaoDois {
  text-align: center;
  padding: 2rem;
  width: 100%;
  p {
    text-align: center;
    width: 1000px;
    font-size: 18px;
  }
  h2 {
    margin-top: 1rem;
    margin: 50px;
  }

  img {
    margin-top: 1rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
