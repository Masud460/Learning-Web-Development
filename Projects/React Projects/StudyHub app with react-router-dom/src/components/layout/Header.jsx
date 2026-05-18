import { NavLink } from "react-router-dom";
import { useAuth, useSidebar } from "../../hooks/";
import hamberger from "../../assets/icon/hamburger.svg";
import cross from "../../assets/icon/cross.svg";

function Header() {
  const { user, logout } = useAuth();
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();

  function closeMenu() {
    setIsSidebarOpen(false);
  }

  return (
    <header className="bg-white w-full h-14 flex justify-center lg:justify-evenly items-center text-2xl border-blue-500 border-b-[1.5px] relative">
      <button
        className={`lg:hidden transition-all duration-150 fixed top-5 cursor-pointer z-50 left-8`}
        onClick={() => setIsSidebarOpen((prev) => !prev)}
      >
        <img
          className="w-4 h-4"
          src={isSidebarOpen ? cross : hamberger}
          alt="icon"
        />
      </button>
      <h1 className="text-blue-600 font-medium text-3xl">
        Study<span className="text-black">Hub</span>
      </h1>
      <ul
        className={` 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        transition-all
        duration-150
        lg:translate-x-0
        flex
        lg:items-center
        flex-col
        lg:flex-row
        gap-3
        lg:gap-8
        font-medium
        absolute
        top-0
        left-0
        mt-14
        lg:mt-0
        p-6
      bg-gray-300
        lg:bg-transparent
        w-60
        lg:w-fit
        lg:relative
        z-40
      `}
      >
        <li className="li">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "text-blue-500" : "text-gray-600"}`
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>
        </li>
        <li className="li">
          <NavLink
            to="courses"
            className={({ isActive }) =>
              `${isActive ? "text-blue-500" : "text-gray-600"}`
            }
            onClick={closeMenu}
          >
            Courses
          </NavLink>
        </li>
        <li className={`li ${user ? "block" : "hidden"}`}>
          <NavLink
            to="dashboard"
            className={({ isActive }) =>
              `${isActive ? "text-blue-500" : "text-gray-600"}`
            }
            onClick={closeMenu}
          >
            Dashboard
          </NavLink>
        </li>
        <li
          className={`li ${user ? "hidden" : "block"} ${isSidebarOpen ? "mt-96" : "mt-0"}`}
        >
          <NavLink
            to="login"
            className={({ isActive }) =>
              `${isActive ? "text-blue-500" : "text-gray-600"}`
            }
            onClick={closeMenu}
          >
            Login
          </NavLink>
        </li>
        <li
          className={`li ${user ? "block" : "hidden"} ${isSidebarOpen ? "mt-79" : "mt-0"}`}
        >
          <button
            onClick={logout}
            className={`bg-blue-500 text-white rounded-md py-1 px-4 font-semibold cursor-pointer `}
          >
            Logout
          </button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
