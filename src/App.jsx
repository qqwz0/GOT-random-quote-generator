import { useEffect, useState, useRef } from 'react'
import FadeLoader from "react-spinners/FadeLoader";
import axios from 'axios';
import Quote from './components/Quote';
import ErrorMessage from './components/ErrorMessage';
import CopyButton from './components/CopyButton';
import FavouriteButton from './components/FavouriteButton';
import './App.module.css'
import styles from './App.module.css';

const API_URL = 'https://api.gameofthronesquotes.xyz/v1/random'

const App = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [copy, setCopy] = useState(false)
  const [like, setLikes] = useState(false)
  const initialized = useRef(false);

  const FetchQuote = async () => {
    setQuote(null);
    setLoading(true);
    setError(false);

    try {
      const response = await axios.get(API_URL);
      setQuote(response.data);
    } catch (err) {
      console.error('Error fetching quote:', err);
      setError(true);
    } finally {
      setLoading(false);
      setCopy(false);
      setLikes(false);
    }
  };

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true

      FetchQuote();
    }
  }, []);

  const copyToClipboard = async () => {
    if (!quote) return;
    await navigator.clipboard.writeText(quote.sentence);
    setCopy(true);
  };

  const addToFavourites = () => {
    if (!quote) return;

    let quotes = JSON.parse(localStorage.getItem('quotes')) || [];
    
    const newQuote = {
      id: Date.now(), 
      sentence: quote.sentence, 
      author: quote.character.name, 
      house: quote.character.house?.name 
    };

    const isDuplicate = quotes.some(q => q.sentence === newQuote.sentence);


    if (!like) {
      if (!isDuplicate) {
        quotes.push(newQuote);
      
        localStorage.setItem('quotes', JSON.stringify(quotes));
        setLikes(true)
    }
    } else {
      quotes = quotes.filter(q => q.sentence !== newQuote.sentence);
      localStorage.setItem('quotes', JSON.stringify(quotes));
      setLikes(false)
  }
}

  return (
    <div className={styles.pageContainer}>
      <h1>Random GOT quote generator!</h1>
      <div>
        <div className={styles.quoteContainer}>
          {loading && <FadeLoader
              size={5}
              aria-label="Loading Spinner"
              data-testid="loader"
              speedMultiplier={2}
            />}
          {error && <ErrorMessage />}
          {quote && <Quote quote={quote.sentence} author={quote.character.name} house={quote.character.house.name} />}
          <button className={styles.button} onClick={FetchQuote}>New</button>
        </div>
        <div className={styles.copyToClipboard}>
          <CopyButton copy={copy} copyToClipboard={copyToClipboard} />
          <FavouriteButton like={like} addToFavourites={addToFavourites} />
        </div>
      </div>
    </div>
  );
}

export default App
