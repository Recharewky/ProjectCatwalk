import React from 'react';
import {render, screen} from '@testing-library/react';
import ReviewsTest from './ReviewsTest.jsx';

it(' should render a form to the page', () => {
  render(<Reviews/>)
  expect(screen.getByRole('form')).toBeInTheDocument();
})
