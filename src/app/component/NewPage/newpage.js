'use client';

import {useRouter} from 'next/navigation';
import styles from './newpage.module.css'
import Link from "next/link";

import SearchInput from "./search.js"
import { IoSearchOutline } from "react-icons/io5";


const NewPage = () =>{
    const router  = useRouter();
    return(
        <div className={styles.nav_container}>
          <div className={styles.logo}><Link href={'/'}>VISMA</Link></div>

        <div className={styles.logo_text}>
          <Link href='/o-nas' >О компании</Link>
              <Link href='/novosti'>Новости</Link>
              <Link href='/novosti'>Новости</Link>
              <Link href='/uslugi'>Услуги</Link>
              <Link href='/form'>Новости</Link>
              <Link href='/kontent'>Новости</Link>
        </div>
              
            
          <div className={styles.search_bar}>
          <button>
            <IoSearchOutline/>
          </button>
            <SearchInput/>
          </div>
          <div className={styles.selectLanguage}>
            <select
            className="selectLanguage"
            name="language"
            id="language">
              <option value="English">Eng</option>
              <option value="Russian">Rus</option>
            </select>
          </div>
        </div>
       
    )
}
export default NewPage;