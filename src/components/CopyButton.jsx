import styles from '../styles/Buttons.module.css'

const CopyButton = ({ copy, copyToClipboard }) => {
  
    return (
      <span className={styles.copyButton} onClick={copyToClipboard}>
        {copy ? 'Copied!' : 'Copy to clipboard'}
      </span>
    )
  }

export default CopyButton