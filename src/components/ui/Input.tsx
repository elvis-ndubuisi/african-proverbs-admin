const Input = ({ type: id, placeholder, options }: any) => {
  return (
    <input
      type="type"
      id={id}
      placeholder={placeholder}
      {...options}
      className="px-2 py-3 text-sm rounded-md text-stone-900 ring-2 ring-gray-300 focus:outline-none focus:ring-polar-green-500"
    />
  );
};

export default Input;
