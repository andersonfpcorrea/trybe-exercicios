// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  const myObj = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };

  const response = await fetch(API_URL, myObj)
    .then((response) => response.json())
    .then((data) => data.joke);

  document.querySelector('#jokeContainer').textContent = response;
};

window.onload = () => fetchJoke();
