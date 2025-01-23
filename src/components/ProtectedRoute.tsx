import { Navigate, Outlet } from "react-router";
const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem("authToken") === "userToken";
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};
export default ProtectedRoute;
