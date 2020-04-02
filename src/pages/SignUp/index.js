import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo.svg';

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="" />

      <Form onSubmit={handleSubmit}>
        <Input
          name="name"
          type="text"
          placeholder="Nome Completo"
          autoComplete="new-password"
        />

        <Input
          name="email"
          type="email"
          placeholder="Seu e-mail"
          autoComplete="new-password"
        />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
          autoComplete="new-password"
        />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
