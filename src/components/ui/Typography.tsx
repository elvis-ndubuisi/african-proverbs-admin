import { Link } from "react-router-dom";

export const Heading = ({ children }: { children: any }): JSX.Element => {
  return <h2>{children}</h2>;
};

export const SectionHeading = ({
  children,
}: {
  children: any;
}): JSX.Element => {
  return (
    <h2 className="font-black text-2xl md:text-3xl uppercase">{children}</h2>
  );
};

export const SectionTagline = ({
  children,
}: {
  children: any;
}): JSX.Element => {
  return <p>{children}</p>;
};

export const Title = (): JSX.Element => {
  return (
    <div className="font-black text-xl cursor-pointer hover:underline">
      <Link to="/">AF Admin</Link>
    </div>
  );
};
