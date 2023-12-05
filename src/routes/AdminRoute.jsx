import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import loadingImg from "../assets/others/loader3.gif"

const AdminRoute = ({children}) => {
    const {user, loading} = useAuth()
    const [isAdmin, isAdminLoading] = useAdmin()

    const location = useLocation()
    
    if(loading || isAdminLoading){
        return <div className="flex justify-center items-center h-screen">
            <img src={loadingImg} alt="" className="w-36 md:w-72"/>
        </div>
    }

    if(user && isAdmin){
        return children;
    }
    return <Navigate to={'/auth/login'} state={{from: location}}></Navigate>
   
};

export default AdminRoute;