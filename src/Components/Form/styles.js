import styled from 'styled-components';

const StyleForm = styled.form`
  font-family: Arial;
  display: flex;
  flex-direction: column;

  h3 {
    display: flex;
    margin-bottom: 0.3rem;
    margin-left: 1rem;
    font-weight: lighter;
  }
  
  input {
    width: 35vw;
    height: 30px;
    margin: 0 1rem;
    font-size: medium;
    font-style: italic;
  }

  button {
    background-color: gray;
    height: 35px;
    width: 10vw;
    border: none;
    color: white;
    border-radius: 5px;
    font-size: medium;
    font-style: italic;
    cursor: pointer;
  }

  span {
    text-align: center;
    margin: 0 1rem;
    height: 30px;
    padding-top: 1rem;
  }

  @media (max-width: 830px) {
    h3 {
      flex-wrap: wrap;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    button {
      width: 6rem;
    }

    input {
      width: 15rem;
      margin-bottom: 2rem;
    }
  }
`;

export default StyleForm;
