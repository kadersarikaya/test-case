"use client"
import React from "react";
import "./Register.css";
import * as Yup from "yup";
import { Formik} from "formik";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from 'next/navigation';
import Link from "next/link";

const Register = () => {
  const { register } = useAuth();
  const router = useRouter();

  return ( 
    <div className="register">
      <h1 className="title">Kayıt Ol</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          gender: "",
        }}
        validationSchema={
          Yup.object({
            name: Yup.string().required("Ad Soyad alanı boş bırakılamaz"),
            email: Yup.string().email("Geçersiz e-posta adresi").required("E-posta alanı boş bırakılamaz"),
            password: Yup.string().required("Şifre alanı boş bırakılamaz"),
            gender: Yup.string().required("Cinsiyet alanı boş bırakılamaz"),
          })
        }
        onSubmit={(values,  {resetForm, setSubmitting }) => {
          console.log(values);
          setTimeout(() => {
            resetForm();
            router.push('/login');
            setSubmitting(false);
          }, 2000);
          register(values.email, 
            values.password, 
            values.gender, 
            values.name
          );
        }}
      >
        {({values, errors, touched, 
        handleSubmit, dirty, isSubmitting, 
        handleChange, handleReset 
        }) => (
            <form onSubmit={handleSubmit}
             className="registerForm" >
              <input 
                type="text" 
                name="name"
                placeholder="Ad Soyad"
                value={values.name} 
                onChange={handleChange}
              />
              {
                errors.name && touched.name && (
                  <div className="inputError">{errors.name}</div>
                )
              }
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
              <select 
                name="gender" 
                id="gender"
                value={values.gender}
                onChange={handleChange}
              >
                <option value="cinsiyet">Cinsiyet</option>
                <option value="kadın">Kadın</option>
                <option value="erkek">Erkek</option>
              </select>
              {
                errors.gender && touched.gender && (
                  <div className="inputError">
                    {errors.gender}
                  </div>
                )
              }
              <button 
                type="submit"
                className="registerBtn" 
                disabled={!dirty || isSubmitting}
                >
                Kayıt Ol
                </button>
              <Link href="/">
                <p className="registerLoginButton">Giriş Yap</p>
              </Link>
            </form>
          )
        }
      </Formik>
    </div>
  );
};

export default Register;
