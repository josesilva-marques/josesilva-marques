function agendar() {
  const nome = document.getElementById("nome").value;

  const data = document.getElementById("data").value;

  const hora = document.getElementById("hora").value;

  if (!nome || !data || !hora) {
    alert("Preencha todos os campos");
    return;
  }
  const lista = document.getElementById("listaAgendamentos");

  const item = document.createElement("p");
  item.textContent = `${nome} agendou para ${data} ás ${hora}`;
  lista.appendChild(item);

  document.getElementById("nome").value = "";

  document.getElementById("data").value = "";

  document.getElementById("hora").value = "";
}
