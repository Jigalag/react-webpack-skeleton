import React from 'react';
import './Dashboard.scss';
import { useNavigate } from 'react-router-dom';
import { routeNames } from '@utils/constants';

function Dashboard () {
  const navigate = useNavigate();
  return (
    <div>Dashboard<button onClick={() => navigate(routeNames.PAGE)}>page</button> </div>
  );
}
export default Dashboard;
