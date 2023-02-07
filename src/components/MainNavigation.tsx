import { Title } from "./ui/Typography";
import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header className="bg-polar-green-700 text-white">
      <nav className="max-w-screen-2xl mx-auto w-full px-2 py-3 flex items-center justify-between">
        <Title />

        <div className="flex items-center justify-between gap-3">
          <ul className="flex items-center gap-3 text-md font-semibold">
            <li className="hover:font-bold">
              <Link to="auth/login">Login</Link>
            </li>
            <li className="hover:font-bold">
              <Link to="auth/register">Register</Link>
            </li>
          </ul>

          <button>Log Out</button>
        </div>
      </nav>
    </header>
  );
};

export default MainNavigation;
