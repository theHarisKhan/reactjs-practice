import React, { useContext, useState } from "react";
import { AuthContext } from "./Reducer";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleLogin = () => {
    const token = "dummy-token";
    const user = { username: data.username };

    login(user, token);
  };

  return (
    <div className="flex flex-col space-y-3 w-2/4 p-5">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={data.username}
        onChange={(e) => setData({
            ...data, username: e.target.value
        })}
      />
      <input
        type="password"
        placeholder="Password"
        value={data.password}
        onChange={(e) => setData({
            ...data, password: e.target.value
        })}
      />
      <button className="bg-blue-700 text-white font-bold uppercase px-2 py-2" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
