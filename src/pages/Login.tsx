import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = () => {
    const username = (
      document.getElementById("username") as HTMLInputElement
    ).value;
    const password = (
      document.getElementById("password") as HTMLInputElement
    ).value;

    if (username === "admin" && password === "admin123") {
      localStorage.setItem("awardtrack_admin", "true");
      navigate("/admin");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <section className="login-page">
      <div className="login-card">
        <h1>AwardTrack Admin</h1>
        <input id="username" type="text" placeholder="Username" />
        <input id="password" type="password" placeholder="Password" />

        {error && <p className="error">{error}</p>}

        <button onClick={handleLogin}>Login</button>
        <p className="hint">Username: admin | Password: admin123</p>
      </div>
    </section>
  );
}

export default Login;