function UsernameInput({ value, onChange }) {
  return (
    <div className="mb-4">
      <label>Username</label>
      <input
        type="text"
        placeholder="Username"
        value={value}
        onChange={onChange}
        className="w-full p-2 border"
      />
    </div>
  );
}

export default UsernameInput;
