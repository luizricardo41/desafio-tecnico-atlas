import styled from 'styled-components';

const StyledList = styled.section`
  font-family: Arial, Helvetica, sans-serif;
  margin-right: 2rem;

  @media (max-width: 710px) {
    margin: 1rem;
  }
`;

const StyledCountRepos = styled.div`
  display: flex;
  width: 13rem;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #f00;

  h4, svg {
    padding: 0 0.3rem;
  }

  span {
    background-color: #e0e0e0;
    padding: 0.3rem;
    border-radius: 15px;
  }
`;

const StyledRepos = styled.div`
  padding: 2rem 0;
  width: 100%;
  border-bottom: 0.01rem solid #00f3;

  a {
    text-decoration: none;
    font-size: large;
    font-weight: bold;
  }
`;

const StyleInfoLanguage = styled.div`
  font-size: small;
  display: flex;
`;

const StyledIcon = styled.span`
  padding-right: 0.5rem;
  margin-top: 0.9rem;
  color: ${({ color }) => color && color.color}
`;

const StyledDate = styled.div`
  display: inline-flex;
  align-items: center;

  p {
    padding-right: 1rem;
  }

  span {
    padding-right: 0.5rem;
  }
`;

export {
  StyledList,
  StyledCountRepos,
  StyledRepos,
  StyleInfoLanguage,
  StyledIcon,
  StyledDate,
};
