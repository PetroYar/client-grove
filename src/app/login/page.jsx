"use client";
import TitleH2 from "../common/components/titleH2/TitleH2";
import { useAuth } from "../common/hooks/useAuth";
import styles from "./Login.module.scss";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

const {user,login,register} = useAuth()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");




  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordConfirmChange = (e) => setPasswordConfirm(e.target.value);

 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      const user = {
        email,
        password,
      };
      login(user);
    } else {
      const newUser = {
        password,
        email,
        username,
      };
      register(newUser);
    }
  };

  return (
    <div className={styles.container}>
      <TitleH2>{isLogin ? "Login" : "Register"}</TitleH2>

      <form className={styles.form} onSubmit={handleSubmit}>
        {!isLogin && (
          <div className={styles.input}>
            <label htmlFor="username">Імя</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
        )}
        <div className={styles.input}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className={styles.input}>
          <label htmlFor="password">Пароль</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <button
            className={styles.eye}
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
          
        </div>
        {!isLogin && (
          <div className={styles.input}>
            <label htmlFor="passwordConfirm">Повторити пароль</label>
            <input
              type={showPassword ? "text" : "password"}
              id="passwordConfirm"
              value={passwordConfirm}
              onChange={handlePasswordConfirmChange}
              required
            />
            <button
              className={styles.eye}
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        )}
        <div className={styles.buttons}>
          <button type="submit">
            {isLogin ? "Увійти" : "Зареєструватись"}
          </button>
          <button type="button" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Ще немає акаунта? Реєстрація" : "Вже є акаунт? Увійти"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
