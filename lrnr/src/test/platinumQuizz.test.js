import { render, screen } from '@testing-library/react';
import AccountPage from "../pages/AccountPage"; // Update as needed

test('renders the Platinum Quizzes section with quizzes', () => {
    render(<AccountPage />);
    const quizzes = ["JavaScript Basics", "React Essentials", "Advanced CSS"];
  
  const quizzesElement = screen.getByText(/Platinum Quizzes/i);
  expect(quizzesElement).toBeInTheDocument();

  quizzes.forEach(quiz => {
    const quizElement = screen.getByText(quiz);
    expect(quizElement).toBeInTheDocument();
  });
});
