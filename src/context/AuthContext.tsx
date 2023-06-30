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
  numeroCrm: string;
  estadoCrm: string;
  emissaoCrm: string;
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

  const fetch = require('node-fetch'); // Importe a biblioteca node-fetch (ou utilize a biblioteca de sua preferência)

async function signUp({
    atuando,
    cep,
    cidade,
    dateNasc,
    email,
    emissaoCrm,
    endereco,
    estado,
    estadoCivil,
    estadoCrm,
    funcionario,
    name,
    naturalidade,
    number,
    numberIdentify,
    numeroCnes,
    numeroCrm,
    phone,
    rg,
    sexo,
  }) {
    try {
      const host = "http://10.0.12.10:3001";
      const response = await fetch(`${host}/doctor/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          atuando,
          cep,
          cidade,
          dateNasc,
          email,
          emissaoCrm,
          endereco,
          estado,
          estadoCivil,
          estadoCrm,
          funcionario,
          name,
          naturalidade,
          number,
          numberIdentify,
          numeroCnes,
          numeroCrm,
          phone,
          rg,
          sexo,
          medicoEspecialidade: ['Pediatra'],
          medicoCurso: []
        }),
      });
      const data = await response.json();
      console.log('SUCESSO',data);
      /* navigation.navigate('VerificationCode'); */
      return data; // Opcional: retorne os dados do banco de dados para qualquer manipulação adicional
    } catch (error) {
      console.log("erro ao cadastrar", error);
      throw error; // Opcional: relance o erro para ser tratado em um nível superior
    }
  }

  
  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}
