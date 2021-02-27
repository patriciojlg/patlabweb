import React, { Component } from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Swal from 'sweetalert2'
const recaptchaRef = React.createRef();

const ContactForm = () => {
    const { register, errors, handleSubmit, reset } = useForm();
    const [datos, setDatos] = React.useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        mensaje: '',
        recaptcha: '',
    })
    const [error, setError] = React.useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        mensaje: '',
    })
    const handleError = (campo, error_desc) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setError({
            ...error,
            [campo]: error_desc
        })
        console.log(error)
    }

    const handleInputChange = (event) => {

        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
        console.log(datos)
    }

    const enviarDatos = (event, e) => {

        sendEmail()

        console.log('enviando datos...' + { datos })
    }


    const sendEmail = () => {
        var data = JSON.stringify({
            "name": datos.nombre + " " + datos.apellido,
            "email": datos.email,
            "phone": datos.telefono,
            "desc": datos.mensaje,
            "recaptcha": datos.recaptcha
        })
        var config = {
            method: 'post',
            url: "https://wfl701cgte.execute-api.us-east-1.amazonaws.com/pruebas01/python-contact",
            headers: {
                'Content-Type': 'application/json',
            },
            data: data
        };

        // Muestra el spinner cargando

        Swal.showLoading()
        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                Swal.fire({
                    icon: 'success',
                    title: 'Hemos recibido tu mensaje',
                    text: 'Nos pondremos en contacto contigo a la brevedad',

                })
                setDatos({
                    nombre: '',
                    apellido: '',
                    email: '',
                    telefono: '',
                    mensaje: '',
                    recaptcha: '',
                })

            })
            .catch(function (error) {


                console.log(error);
            });
    }
    function onChange(value) {
        setDatos({
            ...datos,
            recaptcha: value
        })
    }
    function changeBackground(e) {
        console.log("cambiando color")

        e.target.style.color = 'blue !important';
    }
    return (
        <form onSubmit={handleSubmit(enviarDatos)} className="form">
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="form-field">
                        <input value={datos.nombre} onChange={handleInputChange} type="text" name="nombre" placeholder="Nombre *" ref={register({
                            required: {
                                value: true,
                                message: 'Faltó especificar tu nombre'
                            },

                            minLength: {
                                value: 2,
                                message: 'Mínimo 2 carácteres'
                            }
                        })} />
                        <span className="text-danger text-small d-block mb-2">
                            {errors.nombre && errors.nombre.message}
                        </span>

                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="form-field">
                        <input value={datos.apellido} onChange={handleInputChange} type="text" name="apellido" placeholder="Apellido" />

                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="form-field">
                        <input value={datos.email} onChange={handleInputChange} type="email" name="email" placeholder="E-mail *" />

                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="form-field">
                        <input value={datos.telefono} onChange={handleInputChange} type="text" name="telefono" placeholder="Teléfono" />
                        <p>{error.telefono}</p>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-field">
                        <textarea name="mensaje" value={datos.mensaje} onChange={handleInputChange} placeholder="Mensaje *" ref={register({
                            required: {
                                value: true,
                                message: 'Necesitamos que nos cuentes tus dudas o lo que necesitas cotizar'
                            },
                            minLength: {
                                value: 10,
                                message: 'Su mensaje es muy corto, quizá no logremos entenderlo... Por favor, detalle un poco más'
                            }
                        })} ></textarea>
                        <span className="text-danger text-small d-block mb-2">
                            {errors.mensaje && errors.mensaje.message}
                        </span>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-submit">
                        <button onMouseOver={changeBackground} type="submit" className="btn-cta template-btn-s3">
                            Enviar
                </button>
                    </div>
                </div>
                <div className="col-lg-12">
                    <ReCAPTCHA
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        onChange={onChange}
                    />,
                </div>
            </div>
        </form >
    )

}
export default ContactForm;