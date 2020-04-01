import React from 'react';
import ProTypes from 'prop-types';

import { Wrapper, Container } from './styles';

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: ProTypes.element.isRequired,
};
