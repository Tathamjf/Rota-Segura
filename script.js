function mudarTipo() {
  const tipo = document.getElementById("tipo").value;

  document.querySelectorAll(".tipo").forEach(div => {
    div.style.display = "none";
  });

  if (tipo) {
    document.getElementById(tipo).style.display = "block";
  }
}

function cadastrar() {
  const tipo = document.getElementById("tipo").value;
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (!tipo || !nome || !email || !senha) {
    alert("Preencha os campos obrigatórios!");
    return;
  }

  alert(`Cadastro de ${tipo} realizado com sucesso!`);
}