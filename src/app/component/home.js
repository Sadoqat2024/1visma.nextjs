'use client';

import Image from 'next/image'
import styles from './home.module.css';
import HeroText from './HeroText';
import HeroImage from './HeroImage';

const Home = () =>{
    return(
        <div className={styles.home_container}>

          <div className={styles.photo_container}>
           
              <div className={styles.heroContainer}>
                 <div className={styles.hero_text}>
                    <HeroText/>
                 </div>
                <div className={styles.frames}>

                   <div className={`${styles.frame} ${styles.frame1}`}>
                     <h1>Услуги</h1>
                     <p>Погрузочна-разгрузочная деятельность</p>
                   </div>

                   <div className={`${styles.frame} ${styles.frame2}`}>
                     <h1>Услуги</h1>
                     <p>Погрузочна-разгрузочная деятельность</p>
                   </div>

                    <div className={`${styles.frame} ${styles.frame3}`}>
                     <h1>Услуги</h1>
                     <p>Погрузочна-разгрузочная деятельность</p>
                    </div>

                    <div className={`${styles.frame} ${styles.frame4}`}>
                      <h1>Услуги</h1>
                      <p>Погрузочна-разгрузочная деятельность</p>
                    </div>
                </div>


              </div>
            

        </div>
            
      </div>
      
        
    )
}

export default Home;