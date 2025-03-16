import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import * as Popover from "@radix-ui/react-popover";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { useState } from "react";
import houseData from '../assets/data/houseData.json';
import characeterData from '../assets/data/characterData.json';
import styles from '../styles/Buttons.module.css';

const API_URL = 'https://api.gameofthronesquotes.xyz/v1'

function Settings() {
    const [isOpen, setIsOpen] = useState(false);
    const houses = houseData;
    const characters = characeterData;


  return (
    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
        <Popover.Trigger asChild>
            {/* Your Settings Button/ Icon */}
            <FontAwesomeIcon icon={faSliders} className={styles.audioIcon}/>
        </Popover.Trigger>

        <Popover.Portal>
            <Popover.Content className={styles.popover} side="bottom" align="end">
            <ScrollArea.Root className={styles.scrollArea}>
                <ScrollArea.Viewport className={styles.viewport}>
                <h3>Filter by House</h3>
                <ul className={styles.list}>
                    {houses.map((house) => (
                    <li
                        key={house.slug}
                        className={styles.listItem}
                        onClick={() => onSelect("house", house)}
                    >
                        {house.name}
                    </li>
                    ))}
                </ul>

                <h3>Filter by Character</h3>
                <ul className={styles.list}>
                    {characters.map((character) => (
                    <li
                        key={character.slug}
                        className={styles.listItem}
                        onClick={() => onSelect("character", character)}
                    >
                        {character.name}
                    </li>
                    ))}
                </ul>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar orientation="vertical" className={styles.scrollbar}>
                <ScrollArea.Thumb className={styles.thumb} />
                </ScrollArea.Scrollbar>
            </ScrollArea.Root>

            <Popover.Arrow className={styles.popoverArrow} />
            </Popover.Content>
        </Popover.Portal>
    </Popover.Root>
  )
}

export default Settings