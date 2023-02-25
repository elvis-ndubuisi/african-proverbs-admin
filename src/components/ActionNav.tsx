import { NavLink } from "react-router-dom";

const ActionNav = () => {
  return (
    <nav className="flex items-center gap-3 flex-wrap max-w-5xl mx-auto px-1 border-b border-b-black py-2">
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive
            ? "font-semibold hover:text-polar-green-300 text-polar-green-300"
            : "font-semibold hover:text-polar-green-300"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="proverbs"
        className={({ isActive }) =>
          isActive
            ? "font-semibold hover:text-polar-green-300 text-polar-green-300"
            : "font-semibold hover:text-polar-green-300"
        }
      >
        Proverbs
      </NavLink>
      <NavLink
        to="submitted"
        className={({ isActive }) =>
          isActive
            ? "font-semibold hover:text-polar-green-300 text-polar-green-300"
            : "font-semibold hover:text-polar-green-300"
        }
      >
        Submits
      </NavLink>
      <NavLink
        to="admins"
        className={({ isActive }) =>
          isActive
            ? "font-semibold hover:text-polar-green-300 text-polar-green-300"
            : "font-semibold hover:text-polar-green-300"
        }
      >
        Admins
      </NavLink>
    </nav>
  );
};

export default ActionNav;
