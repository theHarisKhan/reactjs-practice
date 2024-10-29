import React, { useContext } from "react";
import { AuthContext } from "./Reducer";

const UserProfile = () => {
  const { user, isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <p className="text-red-600 text-sm font-semibold">Please Log In</p>;
  }

  return (
    <p className="bg-green-600 text-green-200 font-semibold text-3xl">
      Welcome {user.username}
    </p>
  );
};

export default UserProfile;
