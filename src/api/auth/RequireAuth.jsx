import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
 const location = useLocation();

 const accessToken = localStorage.getItem("ApiToken");

 return <>{!accessToken ? <Navigate to="/" state={{ from: location }} replace /> : <Outlet />}</>;
};

export default RequireAuth;