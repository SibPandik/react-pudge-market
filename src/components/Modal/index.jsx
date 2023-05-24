import React from 'react';
import './index.css';

const Modal = ({ active, onClose, modalActive, activeValid, activeVal }) => {

  const handleClick = () => {
    var form = document.querySelector("#my-form")
    if (form.checkValidity()) {
      modalActive(false)
      activeValid(!activeVal)
    }
  }

  if (!active) {
    return null
  }
  return (
    <div className="modal_reg" onClick={onClose}>
      <div className="modal__content" onClick={(event) => event.stopPropagation()}>
        <span class="close" onClick={onClose}>&times;</span>
        <div class="registration-block">
          <h2>Регистрация</h2>
          <form id='my-form'>
            <div class="form-group">
              <label for="name">Имя:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div class="form-group">
              <label for="password">Пароль:</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type='submit' class="btn btn-primary" id="btnReg" onClick={handleClick} >
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
