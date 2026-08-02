const ideas = [
  "Anote três coisas que você gostaria de aprender este mês.",
  "Transforme uma tarefa grande em um passo que leve cinco minutos.",
  "Crie algo simples hoje e melhore um detalhe amanhã.",
  "Compartilhe uma ideia inacabada com alguém de confiança.",
  "Reserve dez minutos para fazer algo apenas por curiosidade."
];

const message = document.querySelector("#message");
const button = document.querySelector("#inspireButton");
let currentIdea = -1;

button.addEventListener("click", () => {
  message.classList.add("changing");

  window.setTimeout(() => {
    currentIdea = (currentIdea + 1) % ideas.length;
    message.textContent = ideas[currentIdea];
    message.classList.remove("changing");
  }, 180);
});
