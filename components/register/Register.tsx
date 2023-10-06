"use client"
import React from "react";
import "./Register.css";

const Register = () => {
  return ( 
    <div className="register">
      <h1 className="title" >Kayıt Ol</h1>
      <form className="registerForm" >
        <input type="text" placeholder="Ad Soyad" />
        <input type="email" placeholder="E-posta" />
        <input type="password" placeholder="Şifre" />
        <select name="cinsiyet" id="cars">
          <option value="kadın">Kadın</option>
          <option value="erkek">Erkek</option>
        </select>
        <button className="registerBtn" >Kayıt Ol</button>
        <a className="registerLoginButton">Giriş Yap</a>
      </form>
    </div>
  );
};

export default Register;
