import { render, screen } from '@testing-library/react';
import AccountPage from "../pages/AccountPage"; // Update as needed

test('renders the LRNR Level section with a random level', () => {
  render(<AccountPage />);
  
  const levelElement = screen.getByText(/LRNR Level:/i);
  expect(levelElement).toBeInTheDocument();

  // Since the level is random, check if it's within the expected range
  const levelText = levelElement.textContent;
  const levelNumber = parseInt(levelText.match(/\d+/)[0], 10);
  expect(levelNumber).toBeGreaterThanOrEqual(1);
  expect(levelNumber).toBeLessThanOrEqual(5);
});
