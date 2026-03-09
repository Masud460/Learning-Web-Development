function Input({ type, id, place, onCng, val }) {
  return (
    <>
      <input
        type={type}
        id={id}
        placeholder={`Enter your ${place}`}
        required
        className="py-1 lg:py-1.5 text-base px-4 block border-1 border-gray-400 rounded-md w-68 lg:w-100 mb-3"
        onChange={onCng}
        value={val || ''}
      />
    </>
  );
}

export default Input;
