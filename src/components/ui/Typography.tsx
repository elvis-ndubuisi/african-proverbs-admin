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

export const LandingTitle = ({ children }: { children: any }): JSX.Element => {
  return (
    <h1 className="font-black text-3xl md:text-4xl uppercase text-center mb-3">
      {children}
    </h1>
  );
};

export const LandingSubTitle = ({
  children,
}: {
  children: any;
}): JSX.Element => {
  return (
    <h2 className="font-semibold text-xl md:text-2xl capitalize text-center">
      {children}
    </h2>
  );
};
