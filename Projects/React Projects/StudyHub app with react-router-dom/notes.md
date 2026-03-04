# Day 1

# StudyHub Features Plans

## Component and page naming rule:

- Route = Page, UI piece = Component, Name = PascalCase.

## Login state

- The login state should be in App level, The initial value will be come from localStorage.

## Header/Navbar Requirements

- Every page should have the Header/Navbar.
- Highlight the active page gray to blue with an underline.

## Home page Requirements

- Only for marketing.
- When user clicks the 'Browse Courses', should navigated to the Courses page.

## Courses page Requirements

- Read only.
- Include only one course for this time which is React.
- Course title.
- It should have three tabs (Overview, Lessions, Instructor).

## Dashboard page Requirements

- User only.
- It should be protected, display only when user logged in, otherwise navigate user to the 404 page.
- Greet the user with his first name from the name that he entered in login.

## Login page Requirements

- Fake auth.
- Save user's details in the localStorage.
- When user logs in, navigate to the Dashboard page after clicking the login button.

## 404 page Requirements

- User should get a button to navigate to the Home page.

## Routes

- /courses
- /courses/:id
- /login
- /dashboard

# Day 2

- Empty React project setup.
- Folder structure create.
- All pages create (empty JSX).
- Navbar + basic layout.
- Routes connect.
- Usually developers name the folders in lowercase.

# Day 3

## MobileFirstApproach

- Make a side menu.
- It should display when user click the menu button.

## Dependencies

- Set the global login state.

  - Create context.
  - Create provider that sends the values.
  - Wrap the Header with the provider.
  - Use it in all state you need.

- Use context in the App.
- Create protected route, if user has (I mean logged in), render children otherwise redirect to the login page.
- Set the navbar dynamic, before login it should have login button and after login it should display logout and dashboard button.
- Create a fake login system, when user clicks on login button should save the user's data, and redirect to the dashboard page.
- Display user name in dashboard.

## Day 3 Success Criterias

- Navbar should change when user log in.
- Only logged in user sees the Dashboard.
- If user log out, should redirect to the login page.

## Some Question on day 3 tasks

1. Is the Header component going as a prop to the AuthProvider in the following codebase?

```javascript
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

<AuthProvider>
  <Header />
</AuthProvider>;
```

Ans: Its called children not prop.

2. Is it good to use dom selectors in react?
   Ans: No, cause React is a Declarative library.

3. Why the onSubmit doesn't work in these input fields?

```javascript
function LoginForm() {
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  localStorage.setItem(
    "userData",
    JSON.stringify({ email: email, pass: pass })
  );
  return (
    <div>
      <form
        className="w-3/5"
        onSubmit={(e) => {
          e.preventDefault();
          setEmail(e.target[0].value);
          setPass(e.target[1].value);
        }}
      >
        <label
          htmlFor="email"
          className="text-base lg:text-2xl font-semibold block"
        >
          Email:
        </label>
        <Input
          type="email"
          id="email"
          place="email"
          submitCB={(e) => console.log("Why is this not working")}
        />
        <label
          htmlFor="password"
          className="text-base lg:text-2xl font-semibold block"
        >
          Password:
        </label>
        <Input
          type="password"
          id="password"
          place="password"
          submitCB={() => console.log("Why is this not working")}
        />
        <input
          type="submit"
          value="Login"
          className="bg-blue-600 mt-2 py-2 lg:py-3 lg:text-[20px] text-white font-semibold rounded-md cursor-pointer w-68 lg:mx-30 lg:mt-6"
        />
      </form>
    </div>
  );
}

export default LoginForm;
```

Ans: Need to be cleared

4. Why it's throwing undefined error when I am distructuring the context?

```javascript
// AuthContext.jsx
import React from 'react'
import { createContext, useState } from 'react'


const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData)
    }
    const logout = () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };

// LoginForm.jsx
import { useState } from "react";
import Input from "../../components/ui/Input";
import { useContext } from "react";
import { AuthContext } from "../../components/context/AuthContext";

function LoginForm() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  return (
    <div>
      <form
        className="w-3/5"
        onSubmit={(e) => {
          e.preventDefault();
          setEmail(e.target[0].value);
          setPass(e.target[1].value);
        }}
      >
        <label
          htmlFor="email"
          className="text-base lg:text-2xl font-semibold block"
        >
          Email:
        </label>
        <Input
          type="email"
          id="email"
          place="email"
          submitCB={(e) => console.log("Why is this not working")}
        />
        <label
          htmlFor="password"
          className="text-base lg:text-2xl font-semibold block"
        >
          Password:
        </label>
        <Input
          type="password"
          id="password"
          place="password"
          submitCB={() => console.log("Why is this not working")}
        />
        <input
          type="submit"
          value="Login"
          className="bg-blue-600 mt-2 py-2 lg:py-3 lg:text-[20px] text-white font-semibold rounded-md cursor-pointer w-68 lg:mx-30 lg:mt-6"
          // onSubmit={() => login({email: email, pass: pass})}
        />
      </form>
    </div>
  );
}

export default LoginForm;

// App.jsx
import { Header } from "../components";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "../components/context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
      </AuthProvider>
      <Outlet />
    </>
  );
}

export default App;

```

Ans: cause you haven't wraped the outlet also.

5. How can I use a display property two times for displaying different UI in different situation in the following codebase? What do professionals in this situation?

```javascript
className =
  "hidden lg:flex flex flex-col lg:flex-row gap-6 lg:gap-14 font-semibold text-[20px] absolute top-0 left-0 p-6 bg-gray-300 lg:bg-transparent w-60 lg:w-fit lg:relative h-dvh lg:h-full z-9";
```

Ans: your code has a conflict, so use condition based class with useState.

6. Why this is navigate to the real dashboard when we type '/dashboard' but if we don't do that it's going to the path '/login/dashboard'

```javascript
if (user) {
  return <Navigate to="/dashboard" />;
}
```

7. Why the root size is freezed in 500.44px in the following codebase?

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>react_router</title>
    <link href="./src/index.css" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./src/main.jsx"></script>
  </body>
</html>
```

```css
@import "tailwindcss";

@theme {
  --breakpoint-sm: 360px;
  --breakpoint-md: 540px;
  --breakpoint-lg: 778px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
}

#root {
  width: 100%;
  height: calc(100% - 18rem);
}

.li {
  @apply hover:text-blue-500 border-b-1 border-gray-500 lg:border-none pb-2 lg:pb-0;
}
```

```javascript
// Header component
import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Header() {
  const { user, logout } = useContext(AuthContext);

  const [isMobile, setIsMobile] = useState(false);
  const [menuClick, setMenuClick] = useState(false);
  useEffect(() => {
    if (window.visualViewport.width < 778) {
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
          <Link
            onClick={() => {
              logout()
              localStorage.removeItem('userData')
            }}
            className={`bg-gray-500 text-white rounded-md py-2 px-3 font-semibold`}
          >
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;


// Home component
import { Btn } from "../components";

function Home() {
  return (
    <div
      className='flex flex-col gap-2 justify-center items-center bg-blue-100 w-full h-full mt-6'
    >
      <h1 className="text-2xl font-semibold ">Learn Smarter with StudyHub</h1>
      <h3 className="text-lg">Master Web Dev Step by Step</h3>
      <Btn btnText={'Browse Courses'} textSize={'2xl'} paddingX={'4'}/>
      <ul >
        <li>✓ Beginner Friendly</li>
        <li>✓ Practical Learning</li>
        <li>✓ Real Projects</li>
      </ul>
    </div>
  )
}

export default Home;
```

8. How to use calc() in Tailwindcss?

## What I have done for day 3

- Login/Logout works.
- Navbar Dynamic.
- The login state exists when refresh.

## What I am compromizing?

- 404 page back button doesn't work.
- What is the protected route concept?

# Day 4

## Dependencies

- Make a fake data of courses.
- Decide where the courses state exists? it should be in pages/courses.jsx
- Set the enroll logic.
- Display the enrolled courses in Dashboard.

## Things to know to complete day 4:

1. How can we use the 'key' that we've given in our repeatated component?
   Ans: We cannot use the key.


# Day 5

## Dependencies
- Set empty course text in dashboard.
- Disable the button from course page if user already enrolled.
- Set fake loading state.
- Set meaningful function name.
- Consistance folder structure.
- Remove dead code.