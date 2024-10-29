import { useContext } from "react";
import { AuthContext } from "./Reducer";

const LogOut = () => {
  const { logout } = useContext(AuthContext);

  return <button className="bg-red-700 text-white font-bold uppercase px-2 py-2" onClick={logout}>LogOut</button>;
};

export default LogOut;
