### Summary of day 4, block 4 - JavaScript, objects and functios

## You will be able of:

- Manipulating objects;
- Using `for/in` and `for/of`;
- Using functions to structure your code.

# Today's exercise

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
