// Pegar o botão
let botao = document.getElementById("topo");

// Quando o usuário scrollar 20px para baixo, o botão aparece
window.onscroll = function() {scrollBotao()};

function scrollBotao() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    botao.style.display = "block";
  } else {
    botao.style.display = "none";
  }
}

// Quando o usuário clicar, voltar ao topo
function voltaTopo() {
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; // Outros navegadores
}

