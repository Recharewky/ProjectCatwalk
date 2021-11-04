/* eslint-disable import/extensions */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Overview from './client/src/components/Overview/Overview.jsx';

test('Overview component should exist', () => {
  render(<Overview id={12343} />);

  expect(screen.getByText('Product Overview')).toBeInTheDocument();
});
