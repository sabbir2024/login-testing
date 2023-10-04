import { useContext } from "react";
import { AuthContext } from "../Provaider/AuthProvaider";
import { Navigate } from "react-router-dom";

const PrivetRout = ({ children }) => {

    const { user, loding } = useContext(AuthContext);

    if(loding){
        return <span className="loading loading-bars loading-lg "></span>
    }

    if(user){
        return children;
    }


    return <Navigate to="/login"></Navigate>;
};

export default PrivetRout;