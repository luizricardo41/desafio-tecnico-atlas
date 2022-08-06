import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { RiBookLine } from 'react-icons/ri';
import { BsCircleFill } from 'react-icons/bs';
import { FaBalanceScale } from 'react-icons/fa';
import requestApi from '../../Services/api/request';
import {
  StyledList,
  StyledCountRepos,
  StyledRepos,
  StyleInfoLanguage,
  StyledIcon,
  StyledDate,
} from './styles';

// Arquivo JSON com as cores das linguagens do Github
// encontrado em: https://github.com/ozh/github-colors/blob/master/colors.json
import color from '../../utils/color.json';

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

  const selectColor = (language) => {
    const colorSelected = (color[language]);
    return colorSelected;
  };

  const formatDate = (date) => {
    const lastUpdate = new Date(date);
    const day = lastUpdate.toLocaleDateString('en-US', { day: 'numeric' });
    const month = lastUpdate.toLocaleDateString('en-US', { month: 'short' });
    const newDate = `${day} ${month}`;
    return newDate;
  };

  return (
    <StyledList>
      <StyledCountRepos>
        <RiBookLine />
        <h4>
          Repositories
          {' '}
        </h4>
        <span>{ repos.length }</span>
      </StyledCountRepos>
      {repos && repos.map(({
        id, name, language, updated_at: updatedAt, description, html_url: url, license,
      }) => (
        <StyledRepos key={id}>
          <a href={url} target="_blank" rel="noreferrer">{name}</a>
          <p>{ description }</p>
          <StyleInfoLanguage>
            {language
              && <StyledIcon color={selectColor(language)}><BsCircleFill /></StyledIcon>}
            <StyledDate>
              {language && <p>{ language }</p>}
              {license && <span><FaBalanceScale /></span>}
              {license && <p>{ license.name }</p>}
              <p>
                Updated on
                {' '}
                {formatDate(updatedAt)}
              </p>
            </StyledDate>
          </StyleInfoLanguage>
        </StyledRepos>
      ))}

    </StyledList>
  );
}

ListRepositories.propTypes = {
  username: PropTypes.string.isRequired,
};
