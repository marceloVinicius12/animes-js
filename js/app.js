function carregarAnimes() {
  let objetoAnimes = [
      {
          foto: "pokemon.jpg",
          nome: "pokemon"
      },
      {
        foto: "naruto.png",
        nome: "naruto"
      },
      {
      foto : "dragon.jpg",
      nome: "dragon ball z"
  }
]
let listaAnimes = document.querySelector(".lista-animes");
let cartao = "";
for (let i = 0; i < objetoAnimes.length; i++){
    cartao += "<div class='cartao'>";
    cartao += "<img src='img/" + objetoAnimes[i].foto + "'>";
    cartao += objetoAnimes[i].nome;
    cartao += "</div>"
}
listaAnimes.innerHTML= cartao;
}
window.onload = function(){
    carregarAnimes();
}