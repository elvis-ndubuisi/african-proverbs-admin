export const ButtonNormal = ({
  children,
  role,
}: {
  children: any;
  role?: string;
}): JSX.Element => {
  return (
    <button
      role={role}
      className="bg-white text-black rounded-md text-[0.98rem] capitalize flex items-center justify-center gap-3 border-2 border-white cursor-pointer hover:bg-black hover:text-white transition-all font-semibold px-4 py-2"
    >
      {children}
    </button>
  );
};

export const ButtonNormalSecondary = ({
  children,
  role,
}: {
  children: any;
  role?: string;
}): JSX.Element => {
  return (
    <button
      role={role}
      className="bg-black text-white rounded-md text-[0.98rem] capitalize flex items-center justify-center gap-3 border-2 border-white cursor-pointer font-semibold px-4 py-2 hover:bg-white hover:text-black transition-all"
    >
      {children}
    </button>
  );
};
