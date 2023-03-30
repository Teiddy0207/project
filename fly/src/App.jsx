import React, { useState } from 'react';

function App() {
  const [quote, setQuote] = useState({});
  const [authorQuotes, setAuthorQuotes] = useState([]);
  const [authorName, setAuthorName] = useState('');

  const fetchRandomQuote = () => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        setQuote(data);
      });
  };

  const fetchAuthorQuotes = () => {
    fetch(`https://api.quotable.io/quotes?author=${authorName}`)
      .then(response => response.json())
      .then(data => {
        setAuthorQuotes(data.results);
      });
  };

  const handleRandomClick = () => {
    fetchRandomQuote();
    setAuthorQuotes([]);
    setAuthorName('');
  };

  const handleAuthorClick = () => {
    fetchAuthorQuotes();
  };

  const handleAuthorNameChange = (event) => {
    setAuthorName(event.target.value);
  };

  return (
    <div className="App">
      <h1>Random Quotes</h1>
      <div>
        <h2>{quote.content}</h2>
        <p>- {quote.author}</p>
        <button onClick={handleRandomClick}>Random Quote</button>
        {quote.author && <button onClick={handleAuthorClick}>View All Quotes by {quote.author}</button>}
      </div>
      <div>
        <h3>Quotes by {quote.author || authorName}</h3>
        {quote.author &&
          <ul>
            {authorQuotes.map(quote => (
              <li key={quote._id}>{quote.content}</li>
            ))}
          </ul>
        }
        {!quote.author &&
          <div>
            <input type="text" value={authorName} onChange={handleAuthorNameChange} placeholder="Enter author name" />
            <button onClick={handleAuthorClick}>Search</button>
            {authorQuotes.length > 0 &&
              <ul>
                {authorQuotes.map(quote => (
                  <li key={quote._id}>{quote.content}</li>
                ))}
              </ul>
            }
          </div>
        }
      </div>
    </div>
  );
}

export default App;