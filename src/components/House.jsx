import React from 'react'

import baelish from '../assets/images/House_Baelish.svg';
import baratheon from '../assets/images/House_Baratheon.svg';
import bolton from '../assets/images/House_Bolton.svg';
import clegane from '../assets/images/House_Clegane.svg';
import frey from '../assets/images/House_Frey.svg';
import greyjoy from '../assets/images/House_Greyjoy.svg';
import lannister from '../assets/images/House_Lannister.svg';
import martell from '../assets/images/House_Martell.svg';
import mormont from '../assets/images/House_Mormont.svg';
import stark from '../assets/images/House_Stark.svg';
import targaryen from '../assets/images/House_Targaryen.svg';
import tarly from '../assets/images/House_Tarly.svg';
import tarth from '../assets/images/House_Tarth.svg';
import tyrell from '../assets/images/House_Tyrell.svg';

import styles from '../App.module.css';
import { motion } from "framer-motion"; 


const houseImages = {
    baelish,
    baratheon,
    bolton,
    clegane,
    frey,
    greyjoy,
    lannister,
    martell,
    mormont,
    stark,
    targaryen,
    tarly,
    tarth,
    tyrell
  };

const House = ({ houseSlug }) => {

    const imageSrc = houseImages[houseSlug];

  return (
    <>
    {houseSlug && (
      <motion.img 
        src={imageSrc} 
        className={styles.houseImage} 
        alt="Arms House" 
        initial={{ opacity: 0, y: houseSlug ? -50 : 0 }} // Appears from the top if houseSlug is true
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: houseSlug ? 50 : 0 }} // Exits to the bottom if houseSlug is true
        transition={{ type: "tween", duration: 0.5 }}
      />
    )}
    </>
  )
}

export default House