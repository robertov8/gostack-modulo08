import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="" />

      <form>
        <input
          type="text"
          placeholder="Nome Completo"
          autoComplete="new-password"
        />

        <input
          type="email"
          placeholder="Seu e-mail"
          autoComplete="new-password"
        />
        <input
          type="password"
          placeholder="Sua senha secreta"
          autoComplete="new-password"
        />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </form>
    </>
  );
}
