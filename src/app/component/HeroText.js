import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

import styles from './home.module.css';

const HeroText = () =>{
    return(
        <div className={styles.hero_text}>
            <h1>Тавимиский морской порт VISMA</h1>
            <p>loremcverukwgfbvyerbviodjvsssssssssmojvmdio</p>
            <div className={styles.link_btn}>
                О компании <IoArrowForwardCircleOutline />
            </div>
            
        </div>
    )
}

export default HeroText;