/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { setupWorker, rest } from 'msw';
import RelatedProducts from '../src/components/RelatedProducts/RelatedProducts.jsx';

test('Related Products component should exits', () => {
  render(<RelatedProducts id={61579} />);
  expect(screen.getByText('Related Products:')).toBeInTheDocument();
});
