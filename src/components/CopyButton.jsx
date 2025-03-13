import styles from '../styles/Buttons.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard } from '@fortawesome/free-solid-svg-icons';

const CopyButton = ({ copy, copyToClipboard }) => {
  
    return (
      <span className={styles.copyButton} onClick={copyToClipboard}>
        {copy ? <FontAwesomeIcon icon={faClipboard} className={styles.copyButtonActive}/> : <FontAwesomeIcon icon={faClipboard} className={styles.copyButton}/> }
      </span>
    )
  }

export default CopyButton