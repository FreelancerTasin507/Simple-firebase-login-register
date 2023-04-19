import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";



const Home = () => {
  const {user} = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <h2>this is home</h2>
      {user && <span>{user.displayName}</span>}
    </div>
  );
};

export default Home;
