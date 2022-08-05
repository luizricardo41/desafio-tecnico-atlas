import React from 'react';
import PropTypes from 'prop-types';

export default function Profile({ data }) {
  const {
    avatar_url: avatarUrl, login, email, name, bio, followers, following,
  } = data;
  return (
    <section>
      <img
        src={avatarUrl}
        alt="imagem-de-perfil"
      />
      <h2>{name}</h2>
      <p>{login}</p>

      <button type="button">Follow</button>

      <p>{bio}</p>

      <span>
        { followers }
        {' '}
        followers
      </span>
      <span>
        {following}
        {' '}
        following
      </span>

      <p>{email}</p>
    </section>
  );
}

Profile.propTypes = {
  data: PropTypes.shape({
    avatar_url: PropTypes.string,
    login: PropTypes.string,
    email: PropTypes.string,
    name: PropTypes.string,
    bio: PropTypes.string,
    followers: PropTypes.number,
    following: PropTypes.number,
  }).isRequired,
};
