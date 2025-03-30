"use client";
import { createContext, useEffect, useState } from "react";
import { getData, postData } from "../libs/services";
import { useRouter } from "next/navigation";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getUser(token);
    } 
  }, []);

  const getUser = async (token) => {
    try {
      const userData = await getData("/user", token);

      setUser(userData);
    } catch (error) {
      console.error(error);
     
    } 
  };

   const logout = () => {
     setUser(null);
     localStorage.removeItem("token");
     
   };

  const login = async (data) => {
    try {
      const req = await postData("/auth/login", data);

      if (req.token) {
        localStorage.setItem("token", req.token);
        getUser(req.token)
        router.push("/");
      }
    } catch (error) {
      console.error(error);
      console.error(error.response?.data?.message || error.message);
    }
  };

  const register = async (data) => {
    try {
      await postData("/auth/registration", data);
     
      router.push("/");
    } catch (error) {
      console.error(error);
      console.error(
        "❌ Помилка реєстрації:",
        error.response?.data?.message || error.message
      );
    }
  };
  const ctx = {
    user,
    setUser,
    login,
    register,
    logout
  };
  return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
