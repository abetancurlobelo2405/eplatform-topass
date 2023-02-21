import React, { useEffect, useState } from "react";
import { hash } from "bcryptjs";

function Register() {
  const [userData, setUserData] = useState({});
  const [error, setError] = useState("");
  const [code, setCode] = useState("");

  const generateCode = async () => {
    const response = await fetch("/api/code-generator", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const code = await response.json();
    const hashedCode = await hash(String(code), 12);
    setCode(hashedCode);
    return hashedCode;
  };

  const registerHandler = async (e) => {
    e.preventDefault();
    if (userData.password1 !== userData.password2) {
      setError("Contraseñas malas");
      return;
    }

    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userData, generatedCode: code }),
    });
    const data = await response.json();
    if (response.status === 400) {
      console.log(data.message);
      setError(data.message);
      return;
    }
    setError("");
  };

  const onChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {error !== "" ? <p>{error}</p> : undefined}
      <form onSubmit={registerHandler}>
        <input
          onChange={onChange}
          placeholder="Email"
          name="email"
          type="text"
        ></input>
        <input
          onChange={onChange}
          placeholder="Password"
          name="password1"
          type="text"
        ></input>
        <input
          onChange={onChange}
          placeholder="Confirm password"
          name="password2"
          type="text"
        ></input>
        <div>
          <input
            onChange={onChange}
            name="code"
            placeholder="Verification code"
            type="text"
          ></input>
          <button onClick={() => generateCode()} type="button">
            Enviar codigo
          </button>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Register;
