### Today's schedule:

## You will be able of:

- Accessgin data from HTML with JS through DOM selectors.

# Today's exercises

Mutate the existent elements using only:

- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()

1. Create a function that mutate the text on the tag p to a description of you 2 years ahead;
2. Create a function that alter the color of the yellow rectangle to Trybe green (rgb(76,164,109));
3. Create a function that alter the color of the red rectangle to white;
4. Create a function that correct the h1 text;
5. Create a function that mutate all `<p>` text content to uppercase;
6. Create a function that print to the console the content of all `<p>` tags.

Work on the following HTML file:

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Exercício 5.1</title>

    <style>
      main, section {
        border-color: black;
        border-style: solid;
      }

      .title {
        text-align: center;
      }

      .main-content {
        background-color: yellow;
      }

      .main-content .center-content {
        background-color: red;
        width: 50%;
        margin: 0 auto;
      }

      .main-content .center-content p {
        font-style: italic;
      }
    </style>
  </head>
  <body>
    <header>
      <h1 class="title">Exercício 5.1 - JavaEscripito </h1>
    </header>
    <main class="main-content">
      <section class="center-content">
        <p>Texto padrão do nosso site</p>
        <p>-----</p>
        <p>Trybe</p>
      </section>
    </main>
    <script>
        /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */
    </script>
  </body>
</html>
```
