import React, { useState } from 'react';

import styles from './index.module.css';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import ModalValid from '../ModalValid';

const Header = () => {

  const [modalActive, setModalActive] = useState(false)
  const [activeValid, setActiveValid] = useState(false)
  
  const closeModal = () => {
    setModalActive(false);
  }
  
  const CloseValid = () => {
    setActiveValid(false)
  }


  return (
    <div className={styles.header} id="header">
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

      <div id="myBtn" className={styles.header_registr}>
        <button className={styles.header_registr_link} onClick={() => setModalActive(true)}>
          <div>Регистрация</div>
        </button>
      </div>

      <Modal active={modalActive} modalActive={setModalActive} activeValid={setActiveValid} activeVal={activeValid} onClose={closeModal}/>

      <ModalValid title="Спасибо за регистрацию!" active={activeValid} activeValid={setActiveValid} onClose={CloseValid} />
    </div>
  );
};

export default Header;
