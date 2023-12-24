import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"


const PrivateRoute = ({children}) => {
    const user = useSelector(state => state.userReducer)
    if(user.email){
        return (
            <div>{children}</div>
          )
    }
    else{
        return <Navigate to="/login" replace={true}></Navigate>
    }

  
}

export default PrivateRoute;