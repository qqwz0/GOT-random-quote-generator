import styles from '../styles/Buttons.module.css'

const FavouriteButton = ({ like, addToFavourites }) => {
    return (
      <span className={styles.likeButton} onClick={addToFavourites}>
        {like ? 'Added!' : 'Add to favourite'}
      </span>
    )
  }

export default FavouriteButton;