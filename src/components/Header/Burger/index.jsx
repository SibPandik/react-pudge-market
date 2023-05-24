import React from 'react';

import styles from './index.module.css';

import { Link } from 'react-router-dom';
import { useState } from 'react';

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.burger_wrapper}>
      <div className={styles.burger} onClick={handleToggle}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      <div className={`${styles.burgerMenu} ${isOpen ? styles.open : ''}`}>
        <div className={styles.burger_span} onClick={handleToggle}>
          <span className={styles.close} onClick={handleToggle}>
            &times;
          </span>
        </div>
        <div className={styles.menu}>
          <Link to="/">
            <div className={styles.header_links_item} onClick={handleToggle}>Главная</div>
          </Link>
          <a href="#talent">
            <div className={styles.header_links_item} onClick={handleToggle}>Таланты</div>
          </a>
          <Link to="/market">
            <div className={styles.header_links_item} onClick={handleToggle}>Магазин</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Burger;
