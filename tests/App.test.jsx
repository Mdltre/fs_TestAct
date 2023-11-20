import { render, screen, fireEvent} from '@testing-library/react';
import App from "../src/App";
import { expect, test } from 'vitest';

test('Should Render App', () => {
      render(<App />);
      const headline = screen.getByTestId("app-container");
      expect(headline).toBeInTheDocument();
});

test('Enable Login Button if the TextInput are typed', () => {
      render(<App />);
      
      const usernameInput = screen.getByPlaceholderText('Username');
      const passwordInput = screen.getByPlaceholderText('Password');
      const loginButton = screen.getByText('Login');
  
      expect(loginButton).toBeDisabled();

      fireEvent.change(usernameInput, { target: { value: 'testusername' } });
  
      expect(loginButton).toBeDisabled();
  
      fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
  
      expect(loginButton).not.toBeDisabled();
});
  