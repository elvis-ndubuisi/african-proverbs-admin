import { Title } from "./ui/Typography";
import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header className="border-b border-gray-50">
      <nav className="max-w-screen-2xl mx-auto w-full px-2 py-3 flex items-center justify-between">
        <Title />

        <div className="flex items-center justify-between gap-3">
          <ul className="flex items-center gap-3">
            <li>
              <Link
                to="auth/login"
                className="text-base font-medium px-3 py-2 rounded bg-gray-900 text-white"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="auth/register"
                className="text-base font-medium px-3 py-2 rounded bg-gray-900 text-white"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default MainNavigation;
