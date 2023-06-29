import React, { useState, createContext, ReactNode } from "react";

import { api } from "../services/api";

type AuthContextData = {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>
};

type UserProps = {
  response: {
    user: {
      id: string;
      name: string;
      phone: string;
      email: string;
    };
    token: string;
  };
};

type ProviderProps = {
  children: ReactNode
}

type SignInProps = {
  email: string;
  password: string;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({children}: ProviderProps) {
  const [user, setUser] = useState<UserProps>({
    response: {
      user: {
        id: "",
        name: "",
        phone: "",
        email: ""
      },
      token: "",
    },
  });

  const [loadingAuth, setLoadingAuth] = useState(false)
  
  const isAuthenticated = !!user.response.user.name

    async function signIn({email, password}: SignInProps){
      setLoadingAuth(true)

      const host = 'http://10.0.12.10:3001'
      
      try {
        const response = await fetch(`${host}/doctor/auth`, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify({
            email, senha: password
          }), // body data type must match "Content-Type" header
        });
        // const response = await api.post(`${host}/doctor/auth`, {
        //   email, senha: password
        // })
        console.log("{REPSONSE}", await response.json())
      } catch (error) {
        console.error('erro ao logar', JSON.stringify(error))
        setLoadingAuth(false)
      }
  }

  return (
  <AuthContext.Provider value={{user, isAuthenticated, signIn}}>
    {children}
  </AuthContext.Provider>
  )
}
