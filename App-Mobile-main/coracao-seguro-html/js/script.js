
document.addEventListener("DOMContentLoaded", function () {
  configurarSplash();
  configurarAnalise();
  configurarPerfil();
  configurarBotoesVoltar();
});

function configurarSplash() {
  const splash = document.getElementById("splash-apresentacao");
  const botaoComecar = document.getElementById("botao-comecar-protecao");

  if (!splash || !botaoComecar) return;

  botaoComecar.addEventListener("click", function () {
    splash.classList.add("oculto");
  });
}

function configurarAnalise() {
  const formulario = document.getElementById("formulario-analise");
  const campoMensagem = document.getElementById("mensagem-para-analisar");
  const feedback = document.getElementById("feedback-analise");

  if (!formulario || !campoMensagem) return;

  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const texto = campoMensagem.value.trim();

    if (texto.length < 10) {
      if (feedback) {
        feedback.textContent = "Cole uma mensagem um pouco maior para continuar.";
      }
      campoMensagem.focus();
      return;
    }

    localStorage.setItem("mensagemAnalise", texto);
    window.location.href = "resultado.html";
  });
}

function configurarPerfil() {
  const formulario = document.getElementById("formulario-perfil");
  const resultado = document.getElementById("resultado-perfil");

  if (!formulario || !resultado) return;

  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const marcados = formulario.querySelectorAll('input[type="checkbox"]:checked').length;

    resultado.classList.add("visivel");

    if (marcados >= 3) {
      resultado.textContent =
        "Vários sinais de atenção foram marcados. Converse com alguém de confiança antes de enviar dinheiro, documentos ou dados pessoais.";
    } else if (marcados >= 1) {
      resultado.textContent =
        "Há sinais que merecem atenção. Procure confirmar a identidade da pessoa por chamada de vídeo e evite decisões com pressa.";
    } else {
      resultado.textContent =
        "Conexão bloqueada com os Sugar Daddy's. ⚠️Alerta de perfis não verificados⚠️";
    }
  });
}

function configurarBotoesVoltar() {
  const botoes = document.querySelectorAll("[data-acao='voltar']");

  botoes.forEach(function (botao) {
    botao.addEventListener("click", function () {
      history.back();
    });
  });
}
