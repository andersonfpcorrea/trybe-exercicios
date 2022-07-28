export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';
const url = 'https://aws.random.cat/meow';

export const requestAPI = () => ({ type: REQUEST_API });

export const getPicture = (data) => ({ type: GET_PICTURE, data });

export function fetchAPI() {
  return (dispatch) => {
  dispatch(requestAPI());
  return fetch(url)
  .then((r) => r.json())
  .then((d) => dispatch(getPicture(d)))
  .catch((er) => console.error(er));
}
};
