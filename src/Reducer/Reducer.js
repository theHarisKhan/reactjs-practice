import { createContext, useReducer, useState } from "react";

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

// Reducer function to handle actions
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
      };
    default:
      return state;
  }
};

// create context
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // useReducer(createContext(), {value:1}) etc
  const [state, dispatch] = useReducer(authReducer, initialState);
  const [role, setRole] = useState("Guest");

  const loginAs = (newRole) => setRole(newRole);

  const login = (user, token) => {
    dispatch({ type: "LOGIN", payload: { user, token } });
  };

  const logout = () => dispatch({ type: "LOGOUT" });

  return (
    <AuthContext.Provider
      value={{
        ...state,
        role,
        loginAs,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
