// Dados do tipo string = armazenam ttodos os dados que nao forem do tipo numerico ou booleano, como frases, sequencia de numeros, caracteres em geral.
const texto1 = "ola, mundo!";
const texto2 = `ola, mundo!`;
const senha = "senhaSuperSegura444321!";

const citacao = "O leo disse 'oi'";


//template string ou template literal
//funcionalidade que permite a criacao de strings de texto de uma maneira mais flexivel e legivel. No javascript as templates string sao definidas usando o ascento grave (``)
const Nome = 'joao';
const idade = 25;

const mensagem = `Ola, meu nome e ${Nome} e eu tenho ${idade} anos.`;
//console.log(mensagem)
//Neste exemplo a variavel `nome` e incorporada  na string usando ${Nome}, e a variavel idade ${idade}.

// Alem disso, as templates string podem estender-se por varias linhas, mantendo a formatacao e permitindo a quebra de linha sem as ''binds''. Por exemplo:
const Paragrafo = `
Este e um exemplo de paragrafo que se estende por varias linhas sem precisar de quebras de linhas manuais
`;
//console.log (Paragrafo);

//Concatenacao (+) o operador mais tem como funcao no JS somar numeros ou strings, ou numeros e strings. Por exemlo:
const citacao2 = "Meu nome e ";
const MeuNome = "Leonardo";
console.log (citacao2 + MeuNome);
// Isso somente funciona com o operador de (+), concatenar strings;

