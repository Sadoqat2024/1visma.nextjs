import React from 'react';
import styles from './home.module.css';


const HeroImage = () =>{
    return(
        <div className={styles.frames}>
                <div className={styles.frame1}>
                  <h1>Услуги</h1>
                  <p>Погрузочна-разгрузочная деятельность</p>
                </div>

                <div className={styles.frame2}>
                  <h1>Услуги</h1>
                  <p>Погрузочна-разгрузочная деятельность</p>
                </div>

                <div className={styles.frame3}>
                  <h1>Услуги</h1>
                  <p>Погрузочна-разгрузочная деятельность</p>
                </div>

                <div className={styles.frame4}>
                  <h1>Услуги</h1>
                  <p>Погрузочна-разгрузочная деятельность</p>
                </div>
        </div>    
    )
}

export default HeroImage;