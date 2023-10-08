import createStore from 'redux-zero';

const initialState = {
  user: null,
  isAuthenticated: false,
  userIsLoaded: false,
};
const store = createStore(initialState);

export default store;
