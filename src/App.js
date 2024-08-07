import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [repos, setRepos] = useState([]);
  
  const fetchRepos = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos`);
      const data = await response.json();
      setRepos(data);
    } catch (error) {
      console.error('Error fetching repositories:', error);
    }
  };

  return (
    <div className="App">
      <h1>GitHub Repository Fetcher</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={fetchRepos}>Fetch Repositories</button>
      </div>
      <div className="repo-list">
        <h2>Repositories</h2>
        <ul>
          {repos.map(repo => (
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

