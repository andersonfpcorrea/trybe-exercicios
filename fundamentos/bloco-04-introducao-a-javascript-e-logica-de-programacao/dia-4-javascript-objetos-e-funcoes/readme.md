### Summary of day 4, block 4 - JavaScript, objects and functios

## You will be able of:

- Manipulating objects;
- Using `for/in` and `for/of`;
- Using functions to structure your code.

# Today's exercise

## Part I - Objects & for/in

Using the following object, do the following exercises:

```
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
```

1. Printo to the console a welcome message to the above personagem, including his name.
2. Insert on the object a new property called `recorrente`, whose value is `Sim`, then print to the console the whole object.
3. Use `for/in` and show all the object's keys.
4. Use `for/in` and show all the object's values.
5. Define a second object with the same keys of `info` and the following values:
   'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics # 178', 'O último MacPatinhas', 'Sim'. Then, print to the console the values of the correspondent keys together.

Using the following object, do the following exercises:

```
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
```

6. Access the keys `nome`, `sobrenome` e `titulo`, and make a `console.log` with a
   descriptive string.
7. Add a new favorite book in the key `livrosFavoritos`. Assign to this key an object with the following informations:

```
{
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
}
```

8. Access the keys `nome` and `livrosFavoritos` and make a `console.log` with descriptive string.

## Part I - Functions

1. Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

- Exemplo de palíndromo: arara .
- verificaPalindrome('arara') ;
- Retorno esperado: true
- verificaPalindrome('desenvolvimento') ;
- Retorno esperado: false

2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
   - Array de teste: [2, 3, 6, 7, 10, 1]; .
   - Valor esperado no retorno da função: 4 .
3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
   - Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
   - Valor esperado no retorno da função: 6 .
4. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
   - Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
   - Valor esperado no retorno da função: Fernanda .
5. Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
   - Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
   - Valor esperado no retorno da função: 2 .
6. Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
   - Valor de teste: N = 5 .
   - Valor esperado no retorno da função: 1+2+3+4+5 = 15 .
7. Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
   - Valor de teste: 'trybe' e 'be'
   - Valor esperado no retorno da função: true
   - verificaFimPalavra('trybe', 'be') ;
   - Retorno esperado: true
   - verificaFimPalavra('joaofernando', 'fernan') ;
   - Retorno esperado: false
