import { useEffect, useState } from "react";

import { useAuth } from "../context/GlobalContext";
import * as api from "../api";

const Login = () => {
  const { dispatch } = useAuth();
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await api.login(username, pwd);
      console.log("user ", user);
      dispatch({ type: "SUC", payload: user.id });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form>
      <div>
        <label>username: </label>
        <input
          value={username}
          onChange={(e) => setUsername(e.currentTarget.value)}
        />
      </div>

      <div>
        <label>password: </label>
        <input
          type="password"
          value={pwd}
          onChange={(e) => setPwd(e.currentTarget.value)}
        />
      </div>
      <button onClick={handleSubmit}>login</button>
    </form>
  );
};

export default Login;
