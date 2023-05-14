import React from 'react';

import styles from './index.module.css';

const MarketItem = ({ imageUrl, title, price, modalValid }) => {
  return (
    <div className={styles.content}>
      <div className={styles.image}>
        <img src={imageUrl} alt="" />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.title}>{title}</div>
        <div className={styles.price}>
          <button className={styles.btn_buy} onClick={() => modalValid(true)}>Купить за {price}</button>
        </div>
      </div>
    </div>
  );
};

export default MarketItem;
