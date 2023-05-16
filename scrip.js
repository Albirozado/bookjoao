function loading(){
    document.querySelector(".tudo").style.display = "block";
    document.querySelector(".lds-dual-ring").style.display = "none";
}
/*
function exibirInformacao(paragrafo) {
    var informacao = "";

    switch (paragrafo) {
      case 1:
        informacao = "Informações do Parágrafo 1.";
        break;
      case 2:
        informacao = "Informações do Parágrafo 2.";
        break;
      case 3:
        informacao = "Informações do Parágrafo 3.";
        break;
      case 4:
        informacao = "Informações do Parágrafo 4.";
        break;
      case 5:
        informacao = "Informações do Parágrafo 5.";
        break;
      default:
        informacao = "Nenhuma informação disponível.";
        break;
    }

    var divInformacao = document.getElementById("informacao" + paragrafo);
    if (divInformacao.style.display === "none") {
      divInformacao.innerHTML = informacao;
      divInformacao.style.display = "block";
    } else {
      divInformacao.style.display = "none";
    }
  }
  */
 let informa1 = document.querySelector(".informacao1")
 document.querySelector(".paragrafo1").onclick = () =>{
    informa1.classList.toggle("active")
 }

 let informa2 = document.querySelector(".informacao2")
 document.querySelector(".paragrafo2").onclick = () =>{
    informa2.classList.toggle("active")
 }
 let informa3 = document.querySelector(".informacao3")
 document.querySelector(".paragrafo3").onclick = () =>{
    informa3.classList.toggle("active")
 }
 let informa4 = document.querySelector(".informacao4")
 document.querySelector(".paragrafo4").onclick = () =>{
    informa4.classList.toggle("active")
 }
 let informa5 = document.querySelector(".informacao5")
 document.querySelector(".paragrafo5").onclick = () =>{
    informa5.classList.toggle("active")
 }
