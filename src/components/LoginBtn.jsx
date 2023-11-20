function LoginButton({ onClick, isDisabled }) {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`w-full p-2 bg-blue-500 text-white rounded ${
        isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'
      }`}
    >
      Login
    </button>
  );
}

export default LoginButton;
