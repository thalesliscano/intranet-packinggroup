<template lang="pug">
  section.ransomware
    
    
    img(src="../assets/Imagem3.png" alt="Exemplo SSL" width="1000")

    h2 Você sabe oque é ransomware?
    p 
      | Ransomware é um tipo de código malicioso que torna inacessíveis os dados armazenados em um equipamento, geralmente usando criptografia, e que exige pagamento de resgate (ransom) para restabelecer o acesso ao usuário.
    br
    p 
      | O pagamento do resgate geralmente é feito via bitcoins.


    h2 Como ocorre a infecção?
    p 
      | O ransomware pode se propagar de diversas formas, embora as mais comuns sejam: 
    ul
      li através de e-mails com o código malicioso em anexo ou que induzam o usuário a seguir um link;
      li explorando vulnerabilidades em sistemas que não tenham recebido as devidas atualizações de segurança.


    h2 Como devo me proteger de ransomware?
    p 
      | Para se proteger de ransomware você deve tomar os mesmos cuidados que toma para evitar os outros códigos maliciosos, como:
    ul
      li manter o sistema operacional e os programas instalados com todas as atualizações aplicadas;
      li ter um antivírus instalado;
      li ser cuidadoso ao clicar em links ou abrir arquivos.
    p 
     | Fazer 
     span backups 
     | regularmente também é essencial para proteger os seus dados pois, se seu equipamento for infectado, a única garantia de que você conseguirá acessá-los novamente é possuir backups atualizados. O pagamento do resgate não garante que você conseguirá restabelecer o acesso aos dados.





</template>


<script>
export default {
  name: "RansomwarePage",
  data() {
    return {
      // Defina qualquer dado necessário aqui
    };
  }
}
</script>

<style lang="scss" scoped>
.ransomware {
  text-align: center;
  padding: 2rem;
  width: 1000px;
  p {
    text-align: start;
    width: 1000px;
    font-size: 18px;
    span {
      color: blue;
    }
  }
  h2 {
    margin-top: 1rem;
    margin: 30px 30px 30px 0px;
    text-align: start;
    color: red;
  }

  img {
    margin-top: 1rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  ul{
    margin: 10px;
    li{
      margin-left:40px;
      text-align: start;
      padding: 5px;
    }
  }
}
</style>
