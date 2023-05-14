import React from 'react';

import styles from './index.module.css'

const Talent = ({id, title, imageUrl, description}) => {
  return (
    <div className={styles.talent_item}>
      <div className={styles.talent_image}>
        <img src={imageUrl} alt='image_talent'/>
      </div>
      <div className={styles.talent_wrapper}>
        <div className={styles.talent_item_name}>{title}</div>
        <div className={styles.talent_item_description}>
          {description}
        </div>
      </div>
    </div>
  );
};

export default Talent;
