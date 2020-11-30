import React, { useEffect, useState } from 'react';
import { Message } from './Message';
import './effect.css';

export const SimpleForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: ''
  });

  const { name, email } = form;

  useEffect(() => {
    // console.log('Hey')
  }, []);
  useEffect(() => {
    // console.log('Form change')
  }, [form]);
  useEffect(() => {
    // console.log('Email change')
  }, [email]);

  const handleInputChange = ({target}) => {
    setForm({
      ...form,
      [target.name]: target.value
    })
  }

  return (
    <>
      <h1>Simple form</h1>
      <hr />
      <div className="form-group">
        <input
        type="text"
        name="name"
        className="form-control"
        placeholder="Your name"
        autoComplete="off"
        value={name}
        onChange={handleInputChange}
      />
        <input
        type="email"
        name="email"
        className="form-control"
        placeholder="Your email"
        autoComplete="off"
        value={email}
        onChange={handleInputChange}
      />
      {(name === '123') && <Message />}
      </div>
    </>
  )
}
