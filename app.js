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
  alert("Preencha nom
