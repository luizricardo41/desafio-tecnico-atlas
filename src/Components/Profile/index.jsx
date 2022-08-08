import React from 'react';
import PropTypes from 'prop-types';
import { BsDot } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import StyledProfile from './styles';

export default function Profile({ data }) {
  const {
    avatar_url: avatarUrl, login, email, name, bio, followers, following, html_url: url,
  } = data;
  return (
    <StyledProfile>
      <img
        src={avatarUrl}
        alt="imagem-de-perfil"
      />
      <h2>{name}</h2>
      <p>{login}</p>

      <a href={url}>Follow</a>

      <p>{bio}</p>
      <div>
        <FiUsers />
        <span>
          { followers }
          {' '}
          followers
        </span>
        <BsDot />
        <span>
          {following}
          {' '}
          following
        </span>

      </div>

      <p>{email}</p>
    </StyledProfile>
  );
}

Profile.propTypes = {
  data: PropTypes.shape({
    avatar_url: PropTypes.string,
    login: PropTypes.string,
    email: PropTypes.string,
    name: PropTypes.string,
    bio: PropTypes.string,
    html_url: PropTypes.string,
    followers: PropTypes.number,
    following: PropTypes.number,
  }).isRequired,
};
