import store from '@store';
import { redirect,  } from 'react-router-dom';
import { routeNames } from '@utils/constants';

export function secureBaseRouteLoader ({ request }) {
  const { userIsLoaded } = store.getState();
  if (userIsLoaded) {
    return null;
  }
  return new Promise((res) => {
    // todo: Get user info
    setTimeout(() => {
      store.setState({ isAuthenticated: false });
      store.setState({ userIsLoaded: true });
      res(secureRouteLoader({ request }));
    }, 5000)
  })
}

export function secureRouteLoader ({ request }) {
  const { isAuthenticated, userIsLoaded } = store.getState();
  if (!isAuthenticated && userIsLoaded) {
    let params = new URLSearchParams();
    const redirectUrl = new URL(request.url).pathname;
    if (redirectUrl.includes(routeNames.AUTH)) {
      return null;
    }
    if (redirectUrl && redirectUrl !== routeNames.BASE) {
      params.set('redirectUrl', redirectUrl);
    }
    return redirect(`${routeNames.LOGIN}?${params.toString()}`);
  }
  if (isAuthenticated && userIsLoaded) {
    const redirectUrl = new URL(request.url).pathname;
    if (redirectUrl !== routeNames.BASE && !redirectUrl.includes(routeNames.AUTH)) {
      return null;
    }
    return redirect(routeNames.DASHBOARD);
  }
  return null;
}

export function unSecureRouteLoader () {
  const { isAuthenticated, userIsLoaded } = store.getState();
  if (isAuthenticated && userIsLoaded) {
    return redirect(routeNames.DASHBOARD);
  }
  return null;
}
