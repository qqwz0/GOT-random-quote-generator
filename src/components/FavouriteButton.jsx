import styles from '../styles/Buttons.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';


const FavouriteButton = ({ like, addToFavourites }) => {
    return (
      <span className={styles.likeButton} onClick={addToFavourites}>
        {like ? <FontAwesomeIcon icon={faHeart} className={styles.likeButton}/> : <FontAwesomeIcon icon={faRegularHeart} className={styles.likeButton}/>}
      </span>
    )
  }

export default FavouriteButton;