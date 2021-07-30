// https://www.smashingmagazine.com/2020/06/rest-api-react-fetch-axios/
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './GitHubAPI.css';


async function getGitHubReposForUserName(username) {
  const result = await (axios.get(`https://api.github.com/users/${username}/repos`));
  return result.data;
}

function RepoList({repos}) {
  if (!repos) return <><p>No repositories</p></>;

  return (
    <>
    <ul>
      <h2>Available Public Repositories</h2>
      {repos.map((repo) => {
        return (
          <li key={repo.id}>
            <span>{repo.name} </span>
            <span>{repo.description}</span>
          </li>
        );
      })}
    </ul>
    </>
  )
}

function GitHubAPI() {
  const [appState, setAppState] = useState({loaded: false, repos: null});

  useEffect(() => {
    setAppState({ loaded: false });

    (async ()=> {
      const repos = await getGitHubReposForUserName('annechinn');
      setAppState({ loaded:true, repos: repos });
    })();

  }, [setAppState]);

  return (
    <>
      <h1>annechinn Repositories</h1>
      <div>
        {appState.loaded?<RepoList repos={appState.repos}/>:<p>Loading...</p>}
      </div>
    </>
  );
}

export default GitHubAPI;