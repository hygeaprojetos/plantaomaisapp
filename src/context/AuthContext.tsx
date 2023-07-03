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

type SignUpProps = {
  name: string;
  email: string;
  phone: string;
  rg: string;
  numberIdentify: string;
  dateNasc: string;
  naturalidade: string;
  estadoCivil: string;
  sexo: string;
  cep: string;
  endereco: string;
  number: string;
  estado: string;
  cidade: string;
  crms: Array<{
    numero: string;
    estado: string;
    emissao: string;
  }>;
  numeroCnes: string;
  funcionario: string;
  atuando: string;
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

  const fetch = require("node-fetch");

  async function signUp(data: SignUpProps) {
    try {
      const host = "http://10.0.12.10:3001";
      const response = await fetch(`${host}/doctor/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      console.log("SUCESSO", responseData);
      /* navigation.navigate('VerificationCode'); */
      return responseData;
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
