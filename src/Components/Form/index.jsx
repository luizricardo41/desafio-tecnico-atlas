import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import requestApi from '../../Services/api/request';

export default function Form() {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const setTimeMessage = (info) => {
    setMessage(info);
    setTimeout(() => setMessage(''), 5000);
  };

  const redirect = (user) => {
    navigate('/repositories', { state: user.data });
  };

  const checkUser = async () => {
    if (!username) {
      return setTimeMessage('Informe um nome de usuário válido do github');
    }

    const URL = `https://api.github.com/users/${username}`;
    const user = await requestApi(URL);

    if (user === 404) {
      return setTimeMessage('Usuário não encontrado no github. Verifique se você digitou o nome corretamente');
    }

    return redirect(user);
  };

  return (
    <form>
      <label htmlFor="search">
        Buscar Repositório no GitHub
        <input
          id="search"
          onChange={({ target }) => setUsername(target.value)}
        />
      </label>
      <button
        type="button"
        onClick={checkUser}
      >
        Buscar

      </button>
      <div>
        <span>{ message }</span>
      </div>
    </form>
  );
}
