import React from 'react';
import { render, screen } from '@testing-library/react';
import ReviewsTest from './ReviewsTest.jsx';
import Reviews from '../src/components/Reviews/Reviews';

it(' should render a form to the page', () => {
  render(<Reviews />);
  expect(screen.getByRole('form')).toBeInTheDocument();
});
