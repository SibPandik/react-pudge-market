import React from 'react'
import Comment from './Comment'

import styles from './index.module.css'

const CommentBlock = (props) => {
  return (
    <div><div className={styles.comment_block}>
    {
        props.comment_data.map((obj) => (<Comment {...obj}/>))
    } 
    <form className={styles.comment_form}>
      <h3>Оставьте комментарий</h3>
      <div className={styles.form_group}>
        <textarea id="comment" name="comment" rows="5"></textarea>
      </div>
      <button className={styles.button_form} type="submit" disabled>Отправить</button>
      <h5> <a href="#header">Зарегистрируйтесь</a>, чтобы оставить коментарий.</h5>
    </form>
  </div></div>
  )
}

export default CommentBlock