import { render, screen } from '@testing-library/react';
import AccountPage from "../pages/AccountPage"; // Update as needed

test('renders the Account title', () => {
  render(<AccountPage />);
  const titleElement = screen.getByText(/Account/i);
  expect(titleElement).toBeInTheDocument();
});
