"use client";
import React, { useState } from 'react';
import style from '../styles/form.module.scss';
import emailjs from '@emailjs/browser';

export default function Form() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();

  const serviceId = 'service_afg566y';
  const templateId = 'template_u494pbq';
  const publicKey = 'eG2J4DUwYeiuZGYwe';

  const templateParams = {
    from_name: nombre,
    from_email: email,
    to_name: 'Nopafer',
    message
  }

  emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((result) => {
      alert('Mensaje enviado correctamente');
      setNombre('');
      setEmail('');
      setMessage('');
    }, (error) => {
      alert('Error al enviar el mensaje')
    });
  }

  return (
    <>
    <form onSubmit={handleSubmit} className={style.formGroup}>
      <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
      <input type="text" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <textarea rows="10" placeholder="Mensaje" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
      <button type="submit" className={style.enviar}>Enviar</button>
    </form>
    </>
  )
}