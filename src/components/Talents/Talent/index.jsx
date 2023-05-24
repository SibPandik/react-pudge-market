import React from 'react';
import { useState } from 'react';

import styles from './index.module.css';

const Talent = ({ title, imageUrl, gifUrl, description }) => {
  const [isGifVisible, setIsGifVisible] = useState(false);

  const handleImageClick = () => {
    setIsGifVisible(!isGifVisible);
  };

  return (
    <div className={styles.talent_wrapper}>
      <div className={styles.talent_item}>
        <div className={styles.talent_image}>
          <img
            src={imageUrl}
            alt="image_talent"
            onClick={handleImageClick}
            onMouseEnter={handleImageClick}
            onMouseLeave={handleImageClick}
          />
        </div>

        <div className={styles.talent_wrapper}>
          <div className={styles.talent_item_name}>{title}</div>

          {!isGifVisible && <div className={styles.talent_item_description}>{description}</div>}

          <div className={styles.gif_wrapper}>
            {isGifVisible && (
              <div className={styles.gif}>
                <img src={gifUrl} alt="GIF" className={styles.gifka}/>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Talent;
