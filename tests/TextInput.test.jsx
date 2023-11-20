import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from '../src/components/LoginForm';
import { expect, test} from 'vitest';

// SHOULD BE RENDERED
test('Should Render LoginForm', () => {
    render(<LoginForm />);
    const textInput = screen.getByTestId("app-form");
    expect(textInput).toBeInTheDocument();
});

// SHOULD BE ABLE TO TYPE
test('Should be able to type', () => {
    render(<LoginForm />);
    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    fireEvent.change(usernameInput, { target: { value: 'testusername' } });
    fireEvent.change(passwordInput, { target: { value: 'testusername' } });
    expect(usernameInput.value).toBe('testusername');
    expect(passwordInput.value).toBe('testusername');
});

// SHOULD BE ABLE TO RENDER THE LABEL
test('Should render the label', () => {
    render(<LoginForm />);
    const usernameLabel = screen.getByText('Username');
    const passwordLabel = screen.getByText('Password');
    expect(usernameLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
});