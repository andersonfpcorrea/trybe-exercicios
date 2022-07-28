import charAPI from '../services/charAPI';

export const FETCH_DATA = 'FETCH_DATA';
export const GET_DATA = 'GET_DATA';
export const ERROR = 'ERROR';

export const fetchData = () => ({ type: FETCH_DATA });
export const getData = (data) => ({ type: GET_DATA, payload: data });
export const error = (err) => ({type: ERROR, payload: err});
export const fetchAPI = (char) => {
  return async (dispatch) => {
    dispatch(fetchData());
    try {
      const charData = await charAPI(char);
      dispatch(getData(charData));
    } catch (err) {
      dispatch(error(err))
    }
  }
}

