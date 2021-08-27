function ConsultaAPI(){
  const animeAPI = "https://api.jikan.moe/v3/season/2021/spring";
  let objetoAnimes = [];
   $.ajax({
     url : animeAPI,
     async : false,
     success : function(dados){
       objetoAnimes = dados.anime;
     }
   });
   return objetoAnimes;
  }
   ConsultaAPI();
 
 function MontarCartao(foto, nome , score , url){
   let cartao = "";
   cartao += "<div class='cartao'>";
   cartao += "<img src='" + foto + "'>";
   cartao += nome ;"<br>"
   cartao += "<br>"
   cartao += "nota score = " + score  ;"<br>"
   cartao += "<br>"
   cartao += "<li><a href=" + url + ">veja mais</a></li>";
   cartao += "</div>";
   return cartao;
 }
 function carregarAnimes(){
   let listaAnimes = document.querySelector(".lista-animes");
   let conjuntoDeCartoes = "";
   let TodosAnimes = ConsultaAPI(); 
 
 
   TodosAnimes.forEach(animeAtivo =>{
     conjuntoDeCartoes += MontarCartao(animeAtivo.image_url, animeAtivo.title , animeAtivo.score , animeAtivo.url);
   });
 
 listaAnimes.innerHTML= conjuntoDeCartoes;
 }
 let botao = document.querySelector("#carregar");
 botao.onclick = function(){
     carregarAnimes();
 }