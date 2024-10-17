import Image from "next/image"
import styles from "./ThirdList.module.css"
import { FaPlayCircle } from "react-icons/fa";
import React from 'react'

const ThirdList = () => {
  return (
    <div className={styles.ThirdList}>
        <div className={styles.third_container}>
            <div className={styles.third_content}>
                <h1>О компании</h1>
                <p>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                     laboris nisi ut aliquip ex ea commodo consequat. 
                     Duis aute irure dolor in reprehenderit in voluptate velit 
                     esse cillum dolore eu fugiat nulla pariatur. 
                     Excepteur sint occaecat cupidatat non proident, sunt in 
                    culpa qui officia deserunt mollit anim id est laborum. 
                </p>
            </div>

            <div className={styles.listImage}>
                <div className={styles.picture}>
                    
                    <button className={styles.play_btn}><FaPlayCircle /></button>
                </div>
                

                <p>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>
    </div>
  )
}

export default ThirdList
