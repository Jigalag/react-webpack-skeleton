import React from 'react';
import './App.scss';
import { Provider } from 'redux-zero/react';
import store from '@store';
import { routeNames } from '@utils/constants';
import Login from '@pages/Login/Login';
import Register from '@pages/Register/Register';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { unSecureRouteLoader, secureRouteLoader, secureBaseRouteLoader } from '@utils/auth';
import Dashboard from '@pages/Dashboard/Dashboard';
import Page from '@pages/Page/Page';
import PageNotFound from '@pages/PageNotFound/PageNotFound';

const routes = [
  {
    path: routeNames.BASE,
    loader: secureBaseRouteLoader,
    children: [
      {
        path: routeNames.AUTH,
        children: [
          {
            path: routeNames.LOGIN,
            element: <Login />,
            loader: unSecureRouteLoader,
          },
          {
            path: routeNames.REGISTER,
            element: <Register />,
            loader: unSecureRouteLoader,
          },
        ]
      },
      {
        path: routeNames.DASHBOARD,
        loader: secureRouteLoader,
        element: <Dashboard />,
      },
      {
        path: routeNames.PAGE,
        loader: secureRouteLoader,
        element: <Page />,
      },
      {
        path: routeNames.NOT_FOUND,
        element: <PageNotFound />,
      },
    ]
  },
]
const router = createBrowserRouter(routes);

function App () {
  return (
    <Provider store={store}>
      <RouterProvider router={router} fallbackElement={<div>Loading</div>}/>
    </Provider>
  );
}
export default App;
