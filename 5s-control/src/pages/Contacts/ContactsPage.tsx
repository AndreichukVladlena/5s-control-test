import React from 'react';
import './ContactsPage.css';
import ContactsForm from '../../components/ContactsForm/ContactsForm';

const ContactsPage: React.FC = () => {
  return (
    <>
    <h1>Контакты</h1>
    <ContactsForm />
    </>
  );
};

export default ContactsPage;