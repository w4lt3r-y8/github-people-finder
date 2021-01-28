import React, { useState, useContext } from 'react';
import GithubContext from '../context/github/GithubContext';
import AlertContext from '../context/alert/AlertContext';

const Search = () => {
  const GithubContextInSearch = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    if (text === '') {
      alertContext.setAlert_InAlerState_value(
        ' Please write something!',
        'dark'
      );
    } else {
      GithubContextInSearch.searchUsers_InGithubState_value(text);
      setText(text);
    }
  };
  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="search"
          className="btn btn-dark btn-block"
        />
      </form>
      {GithubContextInSearch.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={GithubContextInSearch.clearUsers_InGithubState_value}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
