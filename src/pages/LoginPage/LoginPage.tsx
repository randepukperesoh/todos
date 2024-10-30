import { FormEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (login === "admin" && password === "admin") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/main");
    } else {
      alert("Invalid login or password");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Login:
          <input
            type="text"
            value={login}
            onChange={(event) => setLogin(event.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
