import React from 'react';
import ProTypes from 'prop-types';

import Header from '~/components/Header';

import { Container } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
}

DefaultLayout.propTypes = {
  children: ProTypes.element.isRequired,
};
