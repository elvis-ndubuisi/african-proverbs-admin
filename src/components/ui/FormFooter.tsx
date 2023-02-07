const FormFooter = ({ children }: { children: any }) => {
  return (
    <footer className="w-full rounded-md p-4 bg-white text-stone-800 my-2">
      {children}
    </footer>
  );
};

export default FormFooter;
