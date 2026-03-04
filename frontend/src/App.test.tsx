import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();
  });

  it('increments count when button is clicked', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    const button = screen.getByRole('button', { name: /count is 0/i });
    await user.click(button);
    
    expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument();
  });
});
