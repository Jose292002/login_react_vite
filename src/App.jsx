import React from 'react';
import './App.css';

const LoginPage = () => {
  return (
    <div className="container">
      <img className="logosena" src="../logo-removebg-preview.png" alt="Logo Proyecto" />
      <div className="square">
        <i style={{ '--clr': '#000000' }}></i>
        <i style={{ '--clr': '#000000' }}></i>
        <i style={{ '--clr': '#000000' }}></i>
        <i style={{ '--clr': '#000000' }}></i>

        <div className="login">
          <h2>SIGN IN</h2>
          <div className="inputBx">
            <input type="text" placeholder="Username-Usuario" />
          </div>
          <div className="inputBx">
            <input type="password" placeholder="Password-Contraseña" />
          </div>

          <div className="inputBx">
            <input type="submit" value="Inicio Sesión" />
          </div>

          <div className="links">
            <a href="#">Have you forgotten the password?<br />
              ¿Has olvidado la contraseña?</a>
            <a href="#">Signup <br /> Regístrate</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
