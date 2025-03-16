import React from 'react'
import { useRef, useState } from 'react'
import styles from '../styles/Buttons.module.css'
import audio from '../assets/audio/main_theme.mp3';
import { faVolumeHigh, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BackgroundMusic = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleMusic = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    }

  return (
    <div className={styles.audioContainer}>
        <audio ref={audioRef} src={audio} type="audio/mpeg" autoPlay loop/>
        <button onClick={toggleMusic} className={styles.audioButton}>
            <FontAwesomeIcon icon={isPlaying ? faVolumeHigh : faVolumeXmark} className={styles.audioIcon}/>
        </button>
    </div>
  )
}

export default BackgroundMusic