import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <span className="loading loading-ring loading-lg"></span>;
    }
    if (user) {
        return children;
    }

    return <Navigate to={"/login"}></Navigate>;
};

export default PrivetRoute;

PrivetRoute.propTypes = {
    children: PropTypes.node,
};
