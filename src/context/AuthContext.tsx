import React, { useState, createContext, ReactNode } from "react";
import { api } from "../services/api";

import { useNavigation } from "@react-navigation/native";

type AuthContextData = {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
  signUp: (credentials: SignUpProps) => Promise<void>;
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
  children: ReactNode;
};

type SignInProps = {
  email: string;
  password: string;
};

type CrmsProps = {
  numero: string;
  estado: string;
  emissao: string;
};

type SignUpProps = {
  nome: string;
  email: string;
  senha: string;
  telefone: string;
  cpf: string;
  numeroCrm: string;
  crms: CrmsProps[];
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: ProviderProps) {
  const navigation = useNavigation();

  const [user, setUser] = useState<UserProps>({
    response: {
      user: {
        id: "",
        name: "",
        phone: "",
        email: "",
      },
      token: "",
    },
  });

  const [loadingAuth, setLoadingAuth] = useState(false);

  const isAuthenticated = !!user.response.user.name;

  async function signIn({ email, password }: SignInProps) {
    setLoadingAuth(true);

    const host = "http://10.0.12.10:3001";

    try {
      const response = await api.post(`${host}/doctor/auth`, {
        email,
        password,
      });
      console.log("{REPSONSE}", response.data);
    } catch (error) {
      console.error("erro ao logar", JSON.stringify(error));
      setLoadingAuth(false);
    }
  }

  //const fetch = require("node-fetch");

  async function signUp(data: SignUpProps) {
    try {
      const host = "http://10.0.12.10:3001";
      const response = await fetch(`${host}/doctor/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({...data, web: false}),
      });
      const responseData = await response.json();

      console.log("SUCESSO", responseData);
      
    } catch (error) {

      console.log("erro ao cadastrar", error);
      throw error;
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}
