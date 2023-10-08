import React from 'react';
import './Page.scss';
import { useNavigate } from 'react-router-dom';
import { routeNames } from '@utils/constants';

function Page () {
  const navigate = useNavigate();
  return (
    <div>Page<button onClick={() => navigate(routeNames.DASHBOARD)}>dashboard</button> </div>
  );
}
export default Page;
