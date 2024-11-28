import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Giriş Yap</h2>
      <form >
        <input type="email" placeholder="E-posta Adresi"  />
        <input type="password" placeholder="Şifre"/>
        <button type="submit">Giriş Yap</button>
        <button onClick={() => navigate("/register")}>Kayıt Ol</button>
      </form>
    </div>
  );
};

export default Login;
