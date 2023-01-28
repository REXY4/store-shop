import {Navigate} from "react-router-dom";
import {store} from "../redux/stores";
const ProtectedRoute = ({ children }) => {
    let user = sessionStorage.getItem("token");
    if (!user) {
      return <Navigate to="/" replace />;
    }
    return children;
  };

export default ProtectedRoute;  