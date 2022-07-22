const Redux = require('redux');

const INITIAL_STATE = {
  login: false,
  email: '',
};

const login = (email) => ({
  type: 'LOGIN',
  email,
});

const logout = () => ({
  type: 'LOGOUT',
});

const reducer1 = (state = INITIAL_STATE, action) => {
  if (action.type === 'LOGIN') {
    return {
      ...state,
      login: true,
      email: action.email,
    };
  }
  return state;
};

const reducer2 = (state = INITIAL_STATE, action) => {
  if (action.type === 'LOGOUT') {
    return {
      ...state,
      login: false,
      email: '',
    };
  }
  return state;
};

const allReducers = Redux.combineReducers({
  reducer1,
  reducer2,
});

const store = Redux.createStore(allReducers);

// store.dispatch(login('name@email.com'));
// store.dispatch(logout());

console.log(store.getState());
