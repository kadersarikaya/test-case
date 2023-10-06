import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <h1 className="title">Giriş Yap</h1>
      <form className="loginForm" >
        <input type="email" placeholder="E-posta" />
        <input type="password" placeholder="Şifre" />
        <button className="loginBtn" >Giriş Yap</button>
        <a className="loginLoginButton">Kayıt Ol</a>
      </form>
    </div>
  );
};

export default Login;
