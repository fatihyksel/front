import React from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Kayıt Ol</h2>
      <form >
        <input type="text" placeholder="Ad Soyad" />
        <input type="email" placeholder="E-posta Adresi"  />
        <input type="password" placeholder="Şifre"  />
        <button type="submit">Kayıt Ol</button>
        <button onClick={() => navigate("/login")}>Giriş Yap</button>
      </form>
    </div>
  );
};

export default Register;
