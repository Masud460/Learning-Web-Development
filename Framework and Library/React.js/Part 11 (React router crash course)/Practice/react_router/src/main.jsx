import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, createRoutesFromChildren, RouterProvider, Route} from 'react-router-dom'
import { Home, Contact, About} from './components'
import Layout from './Layout.jsx'
import GIthub from './components/Github/GIthub.jsx'

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
    <Route path='/' element={<Layout />}>
      <Route path='' element={ <Home /> } />
      <Route path='contact' element={ <Contact /> } />
      <Route path='about' element={ <About /> } />
      <Route path='github' element={ <GIthub /> } />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
