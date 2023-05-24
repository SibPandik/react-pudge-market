import React from 'react'
import { Link } from 'react-router-dom';

import styles from './index.module.css';


const Links = () => {
  return (
    <div className={styles.header_links}>
        <Link to="/">
          <div className={styles.header_links_item}>Главная</div>
        </Link>
        <a href="#talent">
          <div className={styles.header_links_item}>Таланты</div>
        </a>

        <Link to="/market">
          <div className={styles.header_links_item}>Магазин</div>
        </Link>
    </div>
  )
}

export default Links