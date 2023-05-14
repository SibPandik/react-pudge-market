import React from 'react'

import styles from './index.module.css'

const Comment = ({imageUrl, name, date, text}) => {
  return (
    <div className={styles.comments}>
      <div className={styles.comment}>
        <div className={styles.avatar}>
          <img src={imageUrl} alt="Avatar"/>
        </div>
        <div className={styles.comment_body}>
          <h4 className={styles.author}>{name}</h4>
          <p className={styles.date}>{date}</p>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default Comment