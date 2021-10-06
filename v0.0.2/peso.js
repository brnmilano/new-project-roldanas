function peso() {
  var peso1 = document.getElementById('tipo1');
  var peso2 = document.getElementById('tipo2');
  var peso3 = document.getElementById('tipo3');
  var peso4 = document.getElementById('tipo4');

  var p1 = Number(tipo1.value);
  var p2 = Number(tipo2.value);
  var p3 = Number(tipo3.value);
  var p4 = Number(tipo4.value);

  var pesoTotal = p1 + p2 + p3 + p4;

  const peso = {
    pesoEstilo1: 2,
    pesoEstilo2: 3,
    pesoEstilo3: 4,
    pesoEstilo4: 5,
  }

  const pesoTotalEstilo1 = p1 * peso.pesoEstilo1;
  const pesoTotalEstilo2 = p2 * peso.pesoEstilo2;
  const pesoTotalEstilo3 = p3 * peso.pesoEstilo3;
  const pesoTotalEstilo4 = p4 * peso.pesoEstilo4;

  const pesoPedido = pesoTotalEstilo1 + pesoTotalEstilo2 + pesoTotalEstilo3 + pesoTotalEstilo4;


  var respeso = document.getElementById('respeso');
  respeso.innerHTML = `Seu pedido esta pesando: ${pesoPedido}` 

  if (pesoPedido <= 10000) {
    limite.innerHTML = `<br>O peso está dentro do limite de 10000 mil quilos! <br> O pedido será entrege na sua residência. <br><br>`
    limite.innerHTML += `Obrigado por fazer parte dessa família!`
  } else {
    limite.innerHTML = `O peso passou o limite de 10000 mil quilos! <br> A transportadora não pode enviar seu pedido.`
  }
}