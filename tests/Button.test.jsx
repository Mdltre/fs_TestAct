import { render, screen, fireEvent } from '@testing-library/react';
import LoginButton from '../src/components/LoginBtn';
import { expect, test, vi} from 'vitest';

// SHOULD RENDER THE BUTTON
test('Should Render Button', () => {
  render(<LoginButton/>);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

// SHOULD BE CLICKED
test('Button should be clicked', async () => {
  const mockOnClick = vi.fn();
  render(<LoginButton onClick={mockOnClick} />);
  const button = screen.getByRole('button');
  fireEvent.click(button);
  expect(mockOnClick).toHaveBeenCalled();
});

// SHOULD BE DISABLED
test('Renders Disabled Button', () => {
  render(<LoginButton isDisabled={true}/>);
  const button = screen.getByRole("button");
  expect(button).toBeDisabled();
});

//SHOULD RENDER THE TEXT
test('Renders Button Text', () => {
  render(<LoginButton />);
  const button = screen.getByRole('button');
  expect(button).toHaveTextContent('Login');
});
