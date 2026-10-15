function IrPara(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

function enviarSolicitacao() {
  const nome = document.getElementById("nome").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const endereco = document.getElementById("endereco").value.trim();
  const observacao = document.getElementById("observacao").value.trim();

  const itens = [...document.querySelectorAll(
    'input[name="ajuda"]:checked'
  )].map(item => item.parentElement.innerText);

if (!nome || !telefone || !endereco) {
  alert("Preencha nome, telefone e endereço.");
  return;
}

if (!itens.lenght) {
  alert("Selecione pelo menos uma nescessidade.");
  retutn;
}

console.log({
  nome,
  telefone,
  endereco,
  necessidades: itens,
  observação
});

alert(
  "Solicitação registrada!\n\n" +
  "Obrigado, " + nome + ".\n" +
  "Em breve a equipe poderá entrar em contato."
  );
}
