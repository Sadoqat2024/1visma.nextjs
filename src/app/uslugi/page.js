'use client'

import React from 'react';
import styles from './SecondList.module.css'
import Link from 'next/link';
import { MdPictureAsPdf } from "react-icons/md";

const SecondList = () => {
  return (
    <div className={styles.SecondContainer}>
      <div className={styles.list_container}>
        <div className={styles.list_content}>
            <h1>УСЛУГИ</h1>
            <Link href={'/'}>
              Тарифы на услуги по обеспечению контроля доступа на территорию Visma на 2022 год 
              <button className={styles.btn}><MdPictureAsPdf /></button>
            </Link> <br/>
            <Link href={'/'}>
              Тарифы на услуги по обеспечению контроля доступа на территорию Visma на 2022 
              <button className={styles.btn}><MdPictureAsPdf /></button>
            </Link><br/>
            <Link href={'/'}>
              Тарифы на услуги по обеспечению контроля доступа на территорию Visma на 2022 год
              <button className={styles.btn}><MdPictureAsPdf /></button>
            </Link>
        </div>
        <div className={styles.shapes}>
            <div className={`${styles.shape} ${styles.shape1}`}>
              <h2>Услуги</h2>
              <p>Хранение грузов</p>
            </div>
            <div className={`${styles.shape} ${styles.shape2}`}>
              <h2>Услуги</h2>
              <p>Хранение грузов</p>
            </div>
            <div className={`${styles.shape} ${styles.shape3}`}>
              <h2>Услуги</h2>
              <p>Хранение грузов</p>
            </div>
            <div className={`${styles.shape} ${styles.shape4}`}>
              <h2>Услуги</h2>
              <p>Хранение грузов</p>
            </div>
            <div className={`${styles.shape} ${styles.shape5}`}>
              <h2>Услуги</h2>
              <p>Хранение грузов</p>
            </div>
            <div className={`${styles.shape} ${styles.shape6}`}>
              <h2>Услуги</h2>
              <p>Хранение грузов</p>
            </div>
         </div>
      </div>
    </div>

  )
}

export default SecondList;
