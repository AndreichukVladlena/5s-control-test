import React, { useState } from 'react';
import './ContactsForm.css';

const ContactsForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      message,
    };

    console.log(JSON.stringify(formData, null, 2));
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contacts">
      <h2>Свяжитесь с нами</h2>
      <form onSubmit={handleSubmit} className="contacts-form">
        <label>
          Имя
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Введите ваше имя"
            required
          />
        </label>
        <label>
          Электронная почта
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Введите ваш email"
            required
          />
        </label>
        <label>
          Сообщение
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Введите ваше сообщение"
            required
          ></textarea>
        </label>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default ContactsForm;
