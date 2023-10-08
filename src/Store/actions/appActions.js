const appActions = () => ({
  setUser: (state, props) => ({ user: props }),
  setIsAuthenticated: (state, props) => ({ isAuthenticated: props }),
});

export default appActions;
