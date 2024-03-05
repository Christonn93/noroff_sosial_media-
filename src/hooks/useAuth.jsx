// Importing react
import { useContext } from "react";

// Importing context provider
import AuthContext from "../api/context/AuthProvider";

const useAuth = () => {
 return useContext(AuthContext);
};

export default useAuth;