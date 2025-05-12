function mostrarFatoGato() {
  fetch("https://catfact.ninja/fact")
    .then(resposta => resposta.json())
    .then(dados => {
      const fatoOriginal = dados.fact;
      traduzirFato(fatoOriginal);
    })
    .catch(erro => console.error("Erro ao buscar fato do gato: ", erro));
}

function traduzirFato(texto) {
  // Usando a API do Google Translate (você precisará de uma chave API válida)
  // Alternativa gratuita: API LibreTranslate
  fetch("https://libretranslate.de/translate", {
    method: "POST",
    body: JSON.stringify({
      q: texto,
      source: "en",
      target: "pt"  // Traduzir para português
    }),
    headers: { "Content-Type": "application/json" }
  })
    .then(resposta => resposta.json())
    .then(dados => {
      const fatoTraduzido = dados.translatedText;
      
      // Mostrar tanto o fato original quanto o traduzido
      document.getElementById("fato-gato").innerHTML = 
        `<p><strong>Original:</strong> ${texto}</p>
         <p><strong>Traduzido:</strong> ${fatoTraduzido}</p>`;
    })
    .catch(erro => {
      console.error("Erro ao traduzir fato: ", erro);
      // Em caso de erro na tradução, mostra apenas o original
      document.getElementById("fato-gato").innerText = texto;
    });
}

// Função para mostrar imagem de cachorro
function mostrarImagemCachorro() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(resposta => resposta.json())
    .then(dados => {
      document.getElementById('imagem-cachorro').src = dados.message;
    })
    .catch(erro => console.error("Erro ao buscar imagem do cachorro: ", erro));
}

// Inicializar ambas as funções
mostrarFatoGato();
mostrarImagemCachorro();
