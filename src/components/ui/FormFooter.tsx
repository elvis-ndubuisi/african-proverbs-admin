const FormFooter = ({ children }: { children: any }) => {
  return (
    <footer className="w-full rounded-md p-4 bg-black/90 text-white my-2 border border-gray-50/50">
      {children}
    </footer>
  );
};

export default FormFooter;
