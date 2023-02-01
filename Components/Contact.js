import React, { useState } from "react";
import style from "../styles/Contact.module.css";
import { useRef } from "react";
import { useForm } from "../hooks/useForm";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

const validationsForm = (form) => {
  let errors = {};

  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "El campo del 'Nombre' es requierido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo 'Nombre' solo acepta letras y espacios en blanco";
  }

  if (!form.email.trim()) {
    errors.email = "El campo del 'Email' es requierido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.name = "El Campo 'Email' es incorrecto";
  }

  if (!form.message.trim()) {
    errors.message = "El campo  'Mensaje' es requierido";
  } else if (!regexComments.test(form.message.trim())) {
    errors.message = "el campo solo acepta 255 caracteres ";
  }

  return errors;
};

export const Contact = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <>
      <div id="contact" className={style.container}>
        <h2>Contact</h2>

        <div className={style.containerform}>
          <form className={style.form} onSubmit={handleSubmit}>
            <div className={style.input}>
              <div className={style.name}>
                <h3>Full Name</h3>

                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  onBlur={handleBur}
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && <p>{errors.name}</p>}
              </div>
              <div className={style.email}>
                <h3>Email</h3>
                <input
                  type="email"
                  name="email"
                  id="Email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <p>{errors.email}</p>}
              </div>
              <div className={style.message}>
                <h3>Message</h3>
                <textarea
                  name="message"
                  cols="30"
                  value={form.message}
                  onChange={handleChange}
                  rows="10"
                  required
                />
                {errors.message && <p>{errors.message}</p>}
              </div>

              <input className={style.button} type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>

      {/*<form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    */}
    </>
  );
};
