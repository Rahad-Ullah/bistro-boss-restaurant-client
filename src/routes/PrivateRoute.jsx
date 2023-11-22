import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import loadingImg from "../assets/others/loader3.gif"


const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation()
    
    if(loading){
        return <div className="flex justify-center items-center h-screen">
            <img src={loadingImg} alt="" className="w-36 md:w-72"/>
        </div>
    }

    if(user){
        return children;
    }
    return <Navigate to={'/auth/login'} state={{from: location}}></Navigate>
        
};

export default PrivateRoute;