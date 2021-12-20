import { render, screen } from '@testing-library/react';
import App from './App';

const React = require('react');

test('renders Chingu Solo Project footer', () => {
  render(<App />);
  const linkElement = screen.getByText(/Chingu Solo Project/i);
  expect(linkElement).toBeInTheDocument();
});
