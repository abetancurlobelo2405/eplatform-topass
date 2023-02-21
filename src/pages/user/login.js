import React, { useEffect, useState } from "react";
import { useSession, signIn } from "next-auth/react";
import styles from "../../styles/Login.module.css";
import { useRouter } from "next/router";

const Login = () => {
  const [userData, setUserData] = useState({});
  const [error, setError] = useState("");

  const router = useRouter();

  async function credentialsHandler(e) {
    e.preventDefault();
    const response = await signIn("credentials", {
      redirect: false,
      email: userData.email,
      password: userData.password,
    });
    if (response.error) {
      setError(response.error);
    }
  }

  const onChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.loginContainer}>
        <h1>LOGIN</h1>
        {error ? error : undefined}
        <form onSubmit={credentialsHandler}>
          <input
            onChange={onChange}
            name="email"
            placeholder="email"
            type="email"
          ></input>
          <input
            onChange={onChange}
            name="password"
            placeholder="password"
            type="password"
          ></input>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
