import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.nav_footer}>
        
        <p><CiLocationOn /> 123456, г.Тавимиская, ул.Морская, д.21 </p>
        <h1 className={styles.footer_visma}>VISMA</h1>
        <div className={styles.footer_contact}>
          <p><FaPhoneAlt /> +7 (123) 45-56-89</p>
          <p><CiMail /> vismaport.@gmail.com</p>
        </div>
        
      </div>
      <div className={styles.body_footer}>
        <div className={`${styles.body_text}${styles.body_text1}`}>
          <h1>Информация о юр.лице</h1>
          <p>ОГРНН 123456789</p>
          <p>ИНН 0987765544321</p>
          <p>КПП 3457689098</p>
          <p>ОКПО 123565 ОКВЕД 132263</p>
          <p>ОКТМО 3214Н356</p>
        </div>
        <div className={`${styles.body_text}${styles.body_text2}`}>
          <h1>Закупки</h1>
          <p>Нормативние документы</p>
          <p>Закупка VISMA ордер</p>
          <p>закупка VISMA тендер</p>
        </div>
        <div className={`${styles.body_text}${styles.body_text3}`}>
          <h1>Акциянером</h1>
          <p>Устав VISMA</p>
          <p>Свидетеьлства госрегистрации</p>
          <p>Свидетеьлства госрегистрации</p>
          <p>Свидетеьлства госрегистрации</p>
        </div>
        <div className={`${styles.body_text}${styles.body_text4}`}>
          <h1>О Компании</h1>
          <p>Порт сегодня</p>
          <p>Характеристка порта</p>
          <p>История</p>
          <p>Экология</p>
          <p>Диплом и награды</p>
          <p>Диплом и награды</p>
        </div>


          
        
        
      </div>
      <div className={styles.small_text}>
          <p>ВСЕ ПРАВА ЗАЩИЩЕНЫ АО VISMA</p>
        </div>
    </div>
  )
}

export default Footer;
