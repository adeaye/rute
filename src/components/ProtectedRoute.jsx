import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;


ProtectedRoute.propTypes = {
    isAuthenticated: PropTypes.bool,
    children: PropTypes.node,
}