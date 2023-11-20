import { useState } from 'react';
import UsernameInput from './UsernameInput.jsx';
import PasswordInput from './PasswordInput.jsx';
import LoginButton from './LoginBtn.jsx';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    updateButtonState(event.target.value, password);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    updateButtonState(username, event.target.value);
  };

  const updateButtonState = (username, password) => {
    setIsButtonDisabled(username === '' || password === '');
  };

  const handleLogin = () => {
    if (username === 'root' && password === 'root') {
      alert('Login successful!');
    } else {
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="w-1/4 mx-auto mt-8" data-testid='app-form'>
      <h1 className="text-2xl mb-4">Login Form</h1>
      <UsernameInput value={username} onChange={handleUsernameChange} />
      <PasswordInput value={password} onChange={handlePasswordChange} />
      <LoginButton onClick={handleLogin} isDisabled={isButtonDisabled} />
    </div>
  );
}

export default LoginForm;
