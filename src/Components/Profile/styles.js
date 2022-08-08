import styled from 'styled-components';

const StyledProfile = styled.section`
  margin: 2rem;
  font-family: Arial, Helvetica, sans-serif;

  h2 {
    margin: 0;
  }

  p {
    margin: 0.5rem 0;
  }

  img {
    width: 20rem;
    border-radius: 190px;
  }

  a {
    text-decoration: none;
    color: black;
    padding: 0.4rem 8rem;
    font-size: small;
    font-weight: bold;
    border: 0.5px solid #00f3;
    background: white;
    border-radius: 5px;
  }

  span {
    display: inline-flex;
    align-items: center;
    font-size: 15px;
  }

  div {
    display: flex;
    justify-content: space-evenly;
    width: 15rem;
    margin: 1rem 0;
  }

  @media (max-width: 450px) {
    img {
      width: 70vw;
    }

    a {
      padding: 0.4rem 30vw;
    }
  }
`;

export default StyledProfile;
