import React from 'react';
import { useLocation } from 'react-router-dom';
import COMPONENTS from '../../Components';

export default function Repositories() {
  const { state } = useLocation();

  return (
    <main>
      <COMPONENTS.Profile data={state} />
      <COMPONENTS.ListRepositories username={state.login} />
    </main>
  );
}
