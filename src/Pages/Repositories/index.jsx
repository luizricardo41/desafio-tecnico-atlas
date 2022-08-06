import React from 'react';
import { useLocation } from 'react-router-dom';
import COMPONENTS from '../../Components';
import StyledRepos from './styles';

export default function Repositories() {
  const { state } = useLocation();

  return (
    <StyledRepos>
      <COMPONENTS.Profile data={state} />
      <COMPONENTS.ListRepositories username={state.login} />
    </StyledRepos>
  );
}
