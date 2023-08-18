const botaoAtualizarConselho = document.querySelector(".atualizar-conselho")
const numeroDoConselho = document.querySelector(".id-conselho")
const descricaoConselho = document.querySelector(".descricao-conselho")

async function pegarConselho() {
    const url = "https://api.adviceslip.com/advice";
    const resposta = await fetch(url);
    const conteudoDoConselho = await resposta.json();
    const idConselho = `Advice #${conteudoDoConselho.slip.id}`;
    const textoConselho = `"${conteudoDoConselho.slip.advice}"`;

    numeroDoConselho.innerHTML = idConselho;
    descricaoConselho.innerHTML = textoConselho
}

botaoAtualizarConselho.addEventListener("click", pegarConselho)

// pegarConselho()