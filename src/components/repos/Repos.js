import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

const Repos = ({ reposPropInUser }) => {
  return reposPropInUser.map((repo) => <RepoItem key={repo.id} repo={repo} />);
};
Repos.propTypes = {
  reposPropInUser: PropTypes.array.isRequired,
};
export default Repos;
