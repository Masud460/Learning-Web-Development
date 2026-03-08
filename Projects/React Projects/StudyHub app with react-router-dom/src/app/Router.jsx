import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import App from './App'
import {
  Home,
  Courses,
  Dashboard,
  Login,
  NotFound
} from '../pages'
import { ProtectedRoute } from "../features";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={ <Home/> } />
      <Route path="courses" element={ <Courses/> } errorElement={<NotFound />} />
      <Route path="dashboard" element={ <ProtectedRoute><Dashboard/></ProtectedRoute> } />
      <Route path="login" element={ <Login/> } />
      <Route path="*" element={ <NotFound/> } />
    </Route>
  )
)

export default router;