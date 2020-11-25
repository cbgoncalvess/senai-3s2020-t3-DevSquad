// const validaCep = /^[0-9]{8}$/g;

//   let verificacaoCep = validaCep.test(CEP);

// function buscarCep(valor) {
//   if (verificacaoCep) {
//     const URL = `https://viacep.com.br/ws/${valor}/json/`;
//     fetch(URL)
//       .then((resposta) => resposta.json())
//       .then((data) => {
//         document.getElementById("rua").value = data.logradouro;
//         document.getElementById("cidade").value = data.localidade;
//         document.getElementById("uf").value = data.uf;
//         SetLogradouro(data.logradouro);
//         SetCidade(data.localidade);
//         SetEstado(data.uf);
//       })
//       .catch((erro) => console.error(erro));
//   } else {
//     alert("O CEP é inválido");
//   }
// }
