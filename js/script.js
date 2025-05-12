function enviarFormulario(event) {
    event.preventDefault();
    const nome = document.getElementById("nomeContato").value;
    const email = document.getElementById("emailContato").value;
    const telefone = document.getElementById("telefoneContato").value;

    const mensagem = `
        Dados enviados com sucesso!<br>
        Nome: ${nome}<br>
        Email: ${email}<br>
        Telefone: ${telefone}
        `;

    document.getElementById("mensagem-confirmacao").innerHTML = mensagem;

}

function mostrarFatoGato() {
    fetch("https://catfact.ninja/fact")
    .then(resposta => resposta.json())
    .then(dados => {
        document.getElementById("fato-gato").innerText = dados.fact;        
    })
    .catch(erro => console.error("Erro ao buscar fato do gato: ", erro));
}

function mostrarImagemCachorro() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(resposta => resposta.json())
    .then(dados => {
        document.getElementById('imagem-cachorro').src = dados.message;
    })
    .catch(erro => console.error("Erro ao buscar imagem do cachorro: ", erro));
}

mostrarImagemCachorro();
