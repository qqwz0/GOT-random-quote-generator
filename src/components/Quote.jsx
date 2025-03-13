import styles from '../styles/Quote.module.css'
import buttonStyles from '../styles/Buttons.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";

const Quote = ({ quote, author, house, like }) => {
    const letters = quote.split('');
    return (
      <div className={styles.quote}>
        <motion.span
          className={styles.Pquote}
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.01 }, // Delay between each letter
            },
          }}
        >
          {letters.map((letter, index) => (
          <motion.span
            key={index}
            className={styles.Pquote}
            variants={{
              hidden: { opacity: 0, filter: "blur(6px)" },
              visible: { opacity: 1, filter: "blur(0px)" },
            }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          >
            {letter === " " ? "\u00A0" : letter} {/* Preserve spaces */}
          </motion.span>
        ))} {like ? <FontAwesomeIcon icon={faHeart} className={buttonStyles.likeButton}/> : ''}
        </motion.span>
        <span className={styles.author}>-{author}{house && `, ${house}`}</span>
      </div>
    )
  }

  export default Quote;