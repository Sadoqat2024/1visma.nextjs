import React from 'react'
import styles from './form.module.css'
import Link from 'next/link'
import { IoArrowForwardCircleOutline } from "react-icons/io5";



const FormPage = () => {
  return (
    <div className={styles.form_container}>
         <div className={styles.nav_form}>
            <ul>
                <li>ГЛАВНАЯ</li>
                <li>КЛИЕНТАМ</li>
                <li>ЗАЯВКА И ПЕРЕЧЕНЬ ДОКУМЕНТОВ И ЗАКЛЮЧЕНИЯ ДОГОВОРОВ</li>
            </ul>
         </div> 
            <div className={styles.title_text}>
                <h1 className={styles.ttt}>Запрос ставки и условий погрузочно-разгрузочных работ</h1>
            </div>
        <div className={styles.formList}>
            
            <form action='#'>
                <div className={styles.user_details}>
                    <div className={styles.input_box}>
                        <span className={styles.details}>Наименование груза</span>
                        <input className={styles.inpt} type='text' required/>
                    </div>
                    <div className={styles.input_box}>
                        <span className={styles.details}>Размер партии</span>
                        <input className={styles.inpt} type='text' required/>
                    </div>
                    <div className={styles.input_box}>
                        <span className={styles.details}>Ед.Измерения</span>
                        <input className={styles.inpt} type='text' required/>
                    </div>
                    <div className={styles.input_box}>
                        <span className={styles.details}>Направления перевозки</span>
                        <input className={styles.inpt} type='text' required/>
                    </div>
                    <div className={styles.input_box}>
                        <span className={styles.details}>Пункт назначения перевозки</span>
                        <input className={styles.inpt} type='text' required/>
                    </div>
                    <div className={styles.input_box}>
                        <span className={styles.details}>Период поступления груза к перевалке</span>
                        <input className={styles.inpt} type='text' required/>
                    </div>
                    <div className={styles.input_box}>
                        <span className={styles.details}>Груз поступает в порт</span>
                        <input className={styles.inpt} type='text' required/>
                    </div>
                    <div className={styles.input_box}>
                        <span className={styles.details}>Груз отправляется из порта</span>
                        <input className={styles.inpt} type='text' required/>
                    </div>
                    <div className={styles.input_box}>
                        <span className={styles.details}>Размер судовой партии</span>
                        <input className={styles.inpt} type='text' required/>
                    </div>
                    <div className={styles.input_box}>
                        <span className={styles.details}>Опасность груза (класс)</span>
                        <input className={styles.inpt} type='text' required/>
                    </div>
                    <div className={styles.last_row}>
                        <div className={`${styles.input_box} ${styles.full_width}`}>
                            <span className={styles.details}>Дополнительная информация о грузе:</span>
                             <textarea className={styles.inpt1} type='text' required></textarea>
                        </div>

                        <div className={styles.buttontitle}>
                            <span className={styles.buttontext}>Прикрепит файл</span> <br/>
                            <button className={styles.btn}>Выберите файл</button>
                            <p>Файл не выбран</p>
                        </div>
                     </div>
                    
                </div>
                <div className={styles.checklist}>
                    <h1 className={styles.check_title}>Просим сообщить : </h1>
                    <div className={styles.check_category}>
                        <input  type='checkbox'/> Ставку ПРP <br/>
                        <input  type='checkbox'/> Срок Технологического накопления груза <br/>
                        <input  type='checkbox'/> Ставку хранения груза сверх Технологического накопления <br/>
                        <input  type='checkbox'/> Возможность приёма и перевалки груза в указанние сроки<br/>
                    </div>
                </div>
                <div className={styles.name_list}>
                    <h1 className={styles.nametitle}>Информация для обратной связи:</h1>
                <div className={styles.form_grid}>
                    <div className={styles.namebox}>
                        <span className={styles.details22}>Имя, Фамилия</span>
                        <input className={styles.inpt} type='text'/>
                    </div>
                    <div className={styles.namebox}>
                        <span className={styles.details22}> Названия компании *</span>
                        <input className={styles.inpt} type='text'/>
                    </div>
                    <div className={styles.namebox}>
                        <span className={styles.details22}>Номер телефона(Факса)</span>
                        <input className={styles.inpt} type='text'/>
                    </div>
                    <div className={styles.namebox}>
                        <span className={styles.details22}>Адрес Эл.Почты *</span>
                        <input className={styles.inpt} type='text'/>
                    </div>
                    
                </div>
                    
                </div>
                
            </form>

        </div>
        <Link href={'/uslugi'} className={styles.link_text} >ОТПРАВИТЬ   <IoArrowForwardCircleOutline /> </Link>
      
    </div>
  )
}

export default FormPage
