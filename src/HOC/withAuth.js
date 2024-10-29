import { useContext } from "react";
import { AuthContext } from "../Reducer/Reducer";

const withAuth = (Element, roles) => {
    return props => {
        const { role } = useContext(AuthContext);

        if(!roles.includes(role)){
            return <p className="text-red-600">You do not have permission to proceed.</p>
        }

        return <Element {...props} />
    }
}

export default withAuth;