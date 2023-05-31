function calcularDivisao() {
    var valorConta = parseFloat(document.getElementById('valor-conta').value);
    var valorTaxa = parseFloat(document.getElementById('valor-taxa').value);
    var quantidadePessoas = parseInt(document.getElementById('quantidade-pessoas').value);
  
    if (isNaN(valorConta) || isNaN(valorTaxa) || isNaN(quantidadePessoas)) {
      document.getElementById('resultado').innerHTML = 'Por favor, preencha todos os campos corretamente.';
    } else {
      var valorTotal = valorConta + valorTaxa;
      var valorPorPessoa = valorTotal / quantidadePessoas;
      document.getElementById('resultado').innerHTML = 'Cada pessoa deve pagar R$ ' + valorPorPessoa.toFixed(2);
    }
  }
  document.getElementById('agradecimento').innerHTML = 'Obrigado pela Preferência!!!';