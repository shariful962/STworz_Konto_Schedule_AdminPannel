import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import RootLayout from "./RootLayout"; // RootLayout that wraps around child components
import Dashboard from "./pages/Dashboard/Dashboard";
import SignIn from "./pages/Auth/SignIn";
import ForgotPass from "./pages/Auth/ForgotPass";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // RootLayout wraps the routes
    children: [
      { index: true, element: <Navigate to="/signin" replace /> }, // Default redirect to dashboard
      { path: "dashboard", element: <Dashboard /> },
     
    ],
  },
  {
    path: "/signin",
    element: <SignIn />, // SignIn page
  },
  {
    path: "/forgotPassword",
    element: <ForgotPass/>
  }

]);

// Main App Component
function App() {
  return <RouterProvider router={router} />;
}

export default App;
