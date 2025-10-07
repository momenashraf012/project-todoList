import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../pages/Layout";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorHandler from "../components/errors/ErrorHandler";
import PageNotFound from "../pages/PageNotFound";
const islogin = false;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <>
            <Layout />
          </>
        }
        errorElement={<ErrorHandler />}
      >
        <Route
          index
          element={
            <ProtectedRoute isAllowed={islogin} redirectPath="Login">
              <HomePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="Login"
          element={
            <ProtectedRoute isAllowed={!islogin} redirectPath="/j">
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="Register"
          element={
            <ProtectedRoute isAllowed={!islogin} redirectPath="/">
              <Register />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);
export default router;
