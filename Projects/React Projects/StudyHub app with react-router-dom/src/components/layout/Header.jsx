import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";

function Header() {
  const { user, logout } = useAuth();

  const [isMobile, setIsMobile] = useState(false);
  const [menuClick, setMenuClick] = useState(false);

  // Check is the device mobile or not for the sidebar
  useEffect(() => {
    if (window.visualViewport.width < 640) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [window.visualViewport.width]);

  function showMenu() {
    setMenuClick((prev) => !prev);
  }
  return (
    <div className="bg-white w-full h-18 flex justify-center lg:justify-evenly items-center text-2xl border-blue-500 border-b-2 relative">
      <div
        onClick={showMenu}
        className={`${
          menuClick ? "left-50" : "left-0"
        } absolute top-4 left-5 text-gray-500 font-bold cursor-pointer z-10 lg:hidden`}
      >
        {menuClick ? "×" : "="}
      </div>
      <h1 className="text-blue-600 font-semibold text-4xl">
        Study<span className="text-black">Hub</span>
      </h1>
      <ul
        className={` ${isMobile && menuClick ? "flex" : "hidden"}
        lg:flex
        lg:items-center
        flex-col
        lg:flex-row
        gap-6
        lg:gap-14
        font-semibold
        text-[20px]
        absolute
        top-0
        left-0
        p-6
      bg-gray-300
        lg:bg-transparent
        w-60
        lg:w-fit
        lg:relative
        h-dvh
        lg:h-full
        z-9
      `}
      >
        <li className="li">
          <NavLink
            to=""
            className={({ isActive }) =>
              `${isActive ? "text-blue-500" : "text-gray-600"}`
            }
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
          >
            Dashboard
          </NavLink>
        </li>
        <li className={`li ${user ? "hidden" : "block"}`}>
          <NavLink
            to="login"
            className={({ isActive }) =>
              `${isActive ? "text-blue-500" : "text-gray-600"}`
            }
          >
            Login
          </NavLink>
        </li>
        <li className={`li ${user ? "block" : "hidden"}`}>
          <button
            onClick={() => logout()}
            className={`bg-blue-500 text-white rounded-md py-2 px-3 font-semibold cursor-pointer`}
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Header;
