import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup, screen } from '@testing-library/react';
import App from './App';
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';

const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(combineReducers({ clickReducer }), initialState),
  } = {}
) => ({
  ...render(<Provider store={store}>{component}</Provider>),
  store,
});

describe('testing clicks', () => {
  beforeEach(cleanup);
  it('checks if the page have a button and an element with "0"', () => {
    renderWithRedux(<App />);
    const btnAdd = screen.queryByText('Clique aqui');
    expect(btnAdd).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('checks if a click in a button increment the counter', () => {
    renderWithRedux(<App />, {
      initialState: { clickReducer: { counter: 5 } },
    });
    expect(screen.getByText('5')).toBeInTheDocument();
  });
});
