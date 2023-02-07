const InputLabel = ({
  children,
  forAttr,
}: {
  children: any;
  forAttr: string;
}): JSX.Element => {
  return (
    <label
      htmlFor={forAttr}
      className="text-base font-semibold capitalize flex items-center justify-between"
    >
      {children}
    </label>
  );
};

export default InputLabel;
