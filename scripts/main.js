const imagemBrasil = document.querySelector("img");
let meuBotao = document.querySelector("button");
let meuCabecalho = document.querySelector("h1");

document.querySelector("h1").addEventListener('click', () => {
    alert("Meu Título");
});

meuBotao.addEventListener('click', () => {
    definirNomeUsuario();
})

imagemBrasil.onclick = () => {

    const mySrc = imagemBrasil.getAttribute("src");

    if (mySrc === "imagens/brasil.png") {
        imagemBrasil.setAttribute("src", "imagens/brasil2.png");
    } else {
        imagemBrasil.setAttribute("src", "imagens/brasil.png");
    }
};



function definirNomeUsuario() {
    const nomeUsuario = prompt("Por favor, digite o seu primeiro nome:");
    if (!nomeUsuario) {
        definirNomeUsuario();
    } else {

        localStorage.setItem("nome", nomeUsuario);
        meuCabecalho.textContent = `Olá! ${nomeUsuario} seja bem vindo ao Brasil`;
    }
}


if (!localStorage.getItem("nome")) {
    definirNomeUsuario();
} else {
    const nomeArmazenado = localStorage.getItem("nome");
    meuCabecalho.textContent = `Olá! ${nomeArmazenado} seja bem vindo ao Brasil`;
}



