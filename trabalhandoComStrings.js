//O JS traz em sua biblioteca varios metodos de que usamos para manipular strings de texto: alterar de maiscula para minuscula, contar quantas letras tem uma palavra, retirar espacos, juntar duas strings e etc.
//Exemplo:
const cidade = "belo horizonte";
const input = "Belo Horizonte";

//console.log (cidade === input);

// o terminal retornara 'false' porque existem caracteres diferentes, apesar de ser a mesma palavra por ter letras maisculas e minusculas em cada variavel nao se pode afirmar pro javascript que sao iguais, para isso temos que usar um metodo para deixar padronizado todos os inputs para ai sim fazer a comparacao. No caso usando uma variavel com o "toLowerCase()". Por exemplo:
const inputMinusculo = input.toLowerCase();
console.log (cidade === inputMinusculo);

//Um outro exemplo interessante, qualquer insercao de texto que exija uma quantidade minima de caracteres, como uma senha ou nom, a propriedade "lenght" pode ser utilizada para sabermos quantos caracteres uma string contem:
const senha = "minhaSenha123";
console.log (senha.length);
