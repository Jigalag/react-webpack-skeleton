import React from 'react';
import './Login.scss';
import { connect } from 'redux-zero/react';
import appActions from '@store/actions/appActions';
import { useNavigate } from 'react-router-dom';
import { routeNames } from '@utils/constants';

const mapToProps = () => ({ });

function Login ({ setIsAuthenticated }) {
  const navigate = useNavigate();
  const login = () => {
    setIsAuthenticated(true);
    navigate(routeNames.DASHBOARD);
  }
  const register = () => {
    navigate(routeNames.REGISTER);
  }
  return (
    <div>
      Login
    </div>
  );
}
export default  connect(mapToProps, appActions())(Login);
