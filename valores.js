function somar() {
  var estilo1 = document.getElementById('tipo1');
  var estilo2 = document.getElementById('tipo2');
  var estilo3 = document.getElementById('tipo3');
  var estilo4 = document.getElementById('tipo4');

  var t1 = Number(tipo1.value);
  var t2 = Number(tipo2.value);
  var t3 = Number(tipo3.value);
  var t4 = Number(tipo4.value);

  var totalDePecas = t1 + t2 + t3 + t4;

  const precos = {
    valorEstilo1: 10,
    valorEstilo2: 15,
    valorEstilo3: 20,
    valorEstilo4: 25,
  }

  const valorTotalEstilo1 = t1 * precos.valorEstilo1;
  const valorTotalEstilo2 = t2 * precos.valorEstilo2;
  const valorTotalEstilo3 = t3 * precos.valorEstilo3;
  const valorTotalEstilo4 = t4 * precos.valorEstilo4;

  const valorPedido = valorTotalEstilo1 + valorTotalEstilo2 + valorTotalEstilo3 + valorTotalEstilo4;

  var pecas = window.document.getElementById('pecas');
  pecas.innerHTML = `Você pediu ${t1} do tipo 1.<br>Você pediu ${t2} do tipo 2.<br>Você pediu ${t3} do tipo 3.<br>Você pediu ${t4} do tipo 4.`
  var totalPecas = document.querySelector('.totalPecas');
  totalPecas.innerHTML = `<br>Você pediu ${totalDePecas} peças.`;

  var resultado = document.getElementById('resultado');
  resultado.innerHTML = `<br>O valor do seu pedido é de: ${valorPedido.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}`
}