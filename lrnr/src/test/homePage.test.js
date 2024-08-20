import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from '../pages/Home';

test('BEGIN JOURNEY button links to the Quiz Generation page', () => {
  render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
  const linkElement = screen.getByRole('link', { name: /BEGIN JOURNEY/i });
  expect(linkElement).toHaveAttribute('href', '/quiz-generation');
});
