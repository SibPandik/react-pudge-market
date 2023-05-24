import React, { useState } from 'react';

import styles from './index.module.css';

import Modal from '../Modal';
import ModalValid from '../ModalValid';
import Links from './Links';
import Burger from './Burger';

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

      {/* Если ширина больше 750 то будет показываться компонент <Links/> 
      если меньше то компонента <Burger/>, это реализовано через css. Если выполняется
      условие то display: none для какого либо элемента*/}
      <div className={styles.links_wrapper}>
        <Links/>
      </div>
      <Burger/>

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
