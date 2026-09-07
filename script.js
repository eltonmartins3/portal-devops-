const botaoDestaque = document.querySelector("#botaoDestaque");
const servicos = document.querySelector("#servicos");

const formContato = document.querySelector("#formContato");
const campoNome = document.querySelector("#nome");
const campoEmail = document.querySelector("#email");
const campoMensagem = document.querySelector("#mensagem");
const resposta = document.querySelector("#resposta");

const botaoModoNoturno = document.querySelector("#botaoModoNoturno");

botaoDestaque.addEventListener("click", () => {
servicos.scrollIntoView({
behavior: "smooth"
});
});

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
card.addEventListener("click", () => {
card.style.transform = "scale(0.97)";

```
setTimeout(() => {
  card.style.transform = "";
}, 150);
```

});
});

formContato.addEventListener("submit", (evento) => {
evento.preventDefault();

const nome = campoNome.value.trim();
const email = campoEmail.value.trim();
const mensagem = campoMensagem.value.trim();

resposta.textContent = "";
resposta.style.color = "";

if (nome === "") {
resposta.textContent = "Por favor, informe seu nome.";
resposta.style.color = "#d60000";
campoNome.focus();
return;
}

if (nome.length < 5) {
resposta.textContent = "O nome deve ter pelo menos 5 caracteres.";
resposta.style.color = "#d60000";
campoNome.focus();
return;
}

if (email === "") {
resposta.textContent = "Por favor, informe seu e-mail.";
resposta.style.color = "#d60000";
campoEmail.focus();
return;
}

const formatoEmail = /^[^\s@]+@[^\s@]+.[^\s@]+$/;

if (!formatoEmail.test(email)) {
resposta.textContent = "Digite um e-mail válido. Exemplo: [nome@email.com](mailto:nome@email.com)";
resposta.style.color = "#d60000";
campoEmail.focus();
return;
}

if (mensagem === "") {
resposta.textContent = "Por favor, escreva sua mensagem.";
resposta.style.color = "#d60000";
campoMensagem.focus();
return;
}

if (mensagem.length < 10) {
resposta.textContent = "A mensagem deve ter pelo menos 10 caracteres.";
resposta.style.color = "#d60000";
campoMensagem.focus();
return;
}

resposta.textContent = `Obrigado pelo contato, ${nome}! Sua mensagem foi enviada com sucesso.`;
resposta.style.color = "#008000";

formContato.reset();
});

botaoModoNoturno.addEventListener("click", () => {
document.body.classList.toggle("modo-noturno");

if (document.body.classList.contains("modo-noturno")) {
botaoModoNoturno.textContent = "☀️";
botaoModoNoturno.setAttribute(
"aria-label",
"Desativar modo noturno"
);
} else {
botaoModoNoturno.textContent = "🌙";
botaoModoNoturno.setAttribute(
"aria-label",
"Ativar modo noturno"
);
}
});
