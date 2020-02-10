import React, { useState } from 'react';
import './App.css';

import usePost from './Hooks/usePost';

function App() {
  const [title, changeTitle] = useState('');
  const [author, changeAuthor] = useState('');
  const { execute, pending, error, data } = usePost();
  function handleSubmit(event) {
    event.preventDefault();
    execute({ endpoint: 'posts', postData: { title, author } });
  }
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <label style={{ marginRight: 10 }}>
            Title:
            <input type="text" value={title} onChange={event => changeTitle(event.target.value)} />
          </label>
          <label style={{ marginRight: 10 }}>
            Author:
            <input type="text" value={author} onChange={event => changeAuthor(event.target.value)} />
          </label>
          <input type="submit" value={!pending ? 'Submit' : 'Loading...'} disabled={pending}/>
        </form>
        {error && <span>There was an error 😞...</span>}
        {data && <span>Success! 😀: {JSON.stringify(data)}</span>}
      </header>
    </div>
  );
}

export default App;
