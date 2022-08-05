import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import requestApi from '../../Services/api/request';

export default function ListRepositories({ username }) {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const URL = ` https://api.github.com/users/${username}/repos`;
      const { data } = await requestApi(URL);
      setRepos(data);
    };
    fetchData();
  }, []);

  return (
    <section>
      <h4>
        Repositories
        {' '}
        { repos.length }
      </h4>
      {repos && repos.map(({
        id, name, language, updated_at: updatedAt, description,
      }) => (
        <div key={id}>
          <h3>{name}</h3>
          <p>{ description }</p>
          <span>{ language }</span>
          <span>{ updatedAt }</span>
        </div>
      ))}

    </section>
  );
}

ListRepositories.propTypes = {
  username: PropTypes.string.isRequired,
};
