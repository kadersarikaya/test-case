"use client"
import React from "react";
import "./Login.css";
import * as Yup from "yup";
import { Formik } from "formik";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from 'next/navigation';
import Link from "next/link";

const login = () => {
    const { login } = useAuth();
    const router = useRouter();

    return (
        <div className="login">
            <h1 className="title">Giriş Yap</h1>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                validationSchema={
                    Yup.object({
                        email: Yup.string().email("Geçersiz e-posta adresi").required("E-posta alanı boş bırakılamaz"),
                        password: Yup.string().required("Şifre alanı boş bırakılamaz"),
                    })
                }
                onSubmit={(values, { resetForm, setSubmitting }) => {
                    console.log(values);
                    setTimeout(() => {
                        resetForm();
                        router.push('/home');
                        setSubmitting(false);
                    }, 2000);
                    login(values.email,
                        values.password,
                    );
                }}
            >
                {({ values, errors, touched,
                    handleSubmit, dirty, isSubmitting,
                    handleChange, handleReset
                }) => (
                    <form onSubmit={handleSubmit}
                        className="loginForm" >
                        <input
                            type="email"
                            name="email"
                            placeholder="E-posta"
                            value={values.email}
                            onChange={handleChange}
                        />
                        {
                            errors.email && touched.email && (
                                <div className="inputError">{errors.email}</div>
                            )
                        }
                        <input
                            type="password"
                            name="password"
                            placeholder="Şifre"
                            value={values.password}
                            onChange={handleChange}
                        />
                        {
                            errors.password && touched.password && (
                                <div className="inputError">{errors.password}</div>
                            )
                        }
                        
                        <button
                            type="submit"
                            className="loginBtn"
                            disabled={!dirty || isSubmitting}
                        >
                           Giriş Yap
                        </button>
                        <Link href="/register">
                            <p className="loginLoginButton">Kayıt Ol</p>
                        </Link>
                    </form>
                )
                }
            </Formik>
        </div>
    );
};

export default login;
