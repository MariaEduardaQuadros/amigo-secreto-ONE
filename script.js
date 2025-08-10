const inputNome = document.getElementById('nome');
const btnAdicionar = document.getElementById('btnAdicionar');
const lista = document.getElementById('lista');
const btnSortear = document.getElementById('btnSortear');
const btnSortearNovamente = document.getElementById('btnSortearNovamente');
const btnReiniciar = document.getElementById('btnReiniciar');
const resultado = document.getElementById('resultado');

let amigos = [];

function adicionarNome() {
  const nome = inputNome.value.trim();
  if (!nome) {
    alert("Digite um nome válido!");
    return;
  }
  amigos.push(nome);
  atualizarLista();
  inputNome.value = '';
}

function atualizarLista() {
  lista.innerHTML = '';
  amigos.forEach((nome) => {
    const li = document.createElement('li');
    li.textContent = `👤 ${nome}`;
    lista.appendChild(li);
  });
}

function sortear() {
  if (amigos.length === 0) {
    alert("Adicione pelo menos um amigo!");
    return;
  }
  const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
  mostrarResultado(`🎉 O amigo secreto é: ${sorteado}`);
  btnSortear.classList.add('hidden');
  btnSortearNovamente.classList.remove('hidden');
  btnReiniciar.classList.remove('hidden');
}

function sortearNovamente() {
  sortear();
}

function mostrarResultado(texto) {
  resultado.textContent = texto;
  resultado.classList.add('mostrar');
}

function reiniciar() {
  amigos = [];
  atualizarLista();
  resultado.textContent = '';
  resultado.classList.remove('mostrar');
  btnSortear.classList.remove('hidden');
  btnSortearNovamente.classList.add('hidden');
  btnReiniciar.classList.add('hidden');
}

btnAdicionar.addEventListener('click', adicionarNome);
btnSortear.addEventListener('click', sortear);
btnSortearNovamente.addEventListener('click', sortearNovamente);
btnReiniciar.addEventListener('click', reiniciar);

inputNome.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    adicionarNome();
  }
});
