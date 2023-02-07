import { ReactNode } from "react";

const FormGroup = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col gap-3 w-full">{children}</div>;
};

export default FormGroup;
