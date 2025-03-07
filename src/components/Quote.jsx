import styles from '../styles/Quote.module.css'

const Quote = ({ quote, author, house }) => {
    return (
      <div className={styles.quote}>
        <p className={styles.Pquote}>{quote}</p>
        <span className={styles.author}>-{author}{house && `, ${house}`}</span>
      </div>
    )
  }

  export default Quote;