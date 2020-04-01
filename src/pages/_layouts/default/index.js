import React from 'react';
import ProTypes from 'prop-types';

import { Container } from './styles';

export default function DefaultLayout({ children }) {
  return <Container>{children}</Container>;
}

DefaultLayout.propTypes = {
  children: ProTypes.element.isRequired,
};
