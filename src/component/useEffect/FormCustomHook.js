import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effect.css';

export const FormCustomHook = () => {
  const [ formValues, handleInputChange ] = useForm({
    name: '',
    email: '',
    password: ''
  });

  const { name, email, password } = formValues;

  useEffect(() => {
    console.log('Email has changed')
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Form Custom Hook</h1>
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
        <input
        type="password"
        name="password"
        className="form-control"
        placeholder="Your password"
        value={password}
        onChange={handleInputChange}
      />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}
