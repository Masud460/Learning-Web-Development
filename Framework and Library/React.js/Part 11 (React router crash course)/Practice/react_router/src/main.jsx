import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromChildren,
  RouterProvider,
  Route,
} from "react-router-dom";
import {
  Home,
  Contact,
  About,
  Github,
  User,
  apiLoader,
  Contact_Us,
  FAQ,
} from "./components";
import Layout from "./Layout.jsx";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       },
//       {
//         path: 'about',
//         element: <About />
//       }
//     ]
//   },
// ])

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />}>
        <Route path="contact_us" element={<Contact_Us />} />
        <Route path="faq" element={<FAQ />} />
      </Route>
      <Route path="user/:id" element={<User />} />
      <Route path="github" element={<Github />} loader={apiLoader}/>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
