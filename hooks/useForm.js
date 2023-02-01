import { useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import emailjs, { init } from "@emailjs/browser";

export const useForm = (initalForm, validateForm) => {
  const [form, setForm] = useState(initalForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  console.log(errors)
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  //validacion
  const handleBur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };
  //Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if (Object.keys(errors).length === 0) {
      alert("Enviando Formulario");
      setLoading(true);

      helpHttp()
        .post("https://formsubmit.co/ajax/danielduarte1991@gmail.com", {
          body: form,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })

        .then((res) => {
          setLoading(false);
          setForm(initalForm)
          setResponse(true);
        });
    } else {
      return;
    }
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBur,
    handleSubmit,
  };
};
