import styles from '../styles/Quote.module.css'
import buttonStyles from '../styles/Buttons.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";
import { useState } from 'react';


const Quote = ({ quote, author, house, like }) => {
    const [showLike, setShowLike] = useState(false);
    const words = quote.split(' ');

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
          onAnimationComplete={() => setShowLike(true)}
        >
          {words.map((word, index) => (
          <motion.span
            key={index}
            className={styles.Pquote}
            variants={{
              hidden: { opacity: 0, filter: "blur(6px)" },
              visible: { opacity: 1, filter: "blur(0px)" },
            }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          >
            {word + "\u00A0"} {/* Додаємо нерозривний пробіл між словами */}
          </motion.span>
        ))} {showLike && (like  ? <FontAwesomeIcon icon={faHeart} className={buttonStyles.likeButton}/> : '')}
        </motion.span>
        <span className={styles.author}>-{author}{house && `, ${house}`}</span>
      </div>
    )
  }

  export default Quote;