import React, { useState, createContext, ReactNode, useEffect } from "react";
import { api } from "../services/api";

import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthContextData = {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
  signUp: (credentials: SignUpProps) => Promise<void>;
  updateForm: () => Promise<void>;
  atualizarAnexos: (name: string, value: object) => Promise<void>;
  navegarForm: (newObject) => Promise<void>;
  etapaCadastro: {};
};

type UserProps = {
    user: {
      id: string;
      name: string;
      phone: string;
      email: string;
    };
    token: string;
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
  id: string;
  nome: string;
  email: string;
  senha: string;
  telefone: string;
  cpf: string;
  numeroCrm: string;
  crms: CrmsProps[];
};

export type UpdateProps = {
  id: string;
  nome: string;
  telefone: string;
  email: string;
  crms: CrmsProps[];
  dataNascimento: string;
  sexo: string;
  endereco: string;
  numero: string;
  cep: string;
  complemento: string;
  estado: string;
  cidade: string;
  status: string;
  rg: string;
  cpf: string;
  estadoCivil: string;
  anexoDiplomaDeclaracao: string;
  anexoProtocolo: [];
  anexoCpf: [];
  anexoComprovanteEndereco: [];
  anexoCertidaoCasamento: [];
  anexoCnpjEmpresa: [];
  anexoDocumentosAdicicionais: [];
  anexoProtocoloAdicional: [];
  anexoRpaAlvara: [];
  anexoCrmDefinitivo: [];
  anexoRg: [];
  anexoCnh: [];
  anexoCertidaoRqe: [];
  anexoContratoSocialConsolidado: [];
  anexoCertidaoSimplificadaJuntaComercial: [];
  anexoCrmAdicional: [];
  anexoFotoMedico: [];
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: ProviderProps) {
  const navigation = useNavigation();

  const [user, setUser] = useState<UserProps>({
      user: {
        id: "",
        name: "",
        phone: "",
        email: "",
      },
      token: "",
  });

  const [etapaCadastro, setEtapaCadastro] = useState({});

  const [loadingAuth, setLoadingAuth] = useState(false);

  const isAuthenticated = !!user.user.name;

  useEffect(() => {
    async function getUser() {
      //dados do usuario....
      const userInfo = AsyncStorage.getItem("tokenPL");
    }
    getUser();
  }, []);

  async function signIn({ email, password }: SignInProps) {
    setLoadingAuth(true);

    const host = "http://10.0.12.10:3001";

    try {
      const response = await api.post(`${host}/doctor/auth`, {
        email,
        password,
      });
      setUser(response.data)
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
        body: JSON.stringify({ ...data, web: false }),
      });
      console.log('data[>]',data)
      const responseData = await response.json();
      await AsyncStorage.setItem("tokenPL", responseData.response.token);
      //console.log("SUCESSO", responseData);
    } catch (error) {
      console.log("erro ao cadastrar", error);
      throw error;
    }
  }

  async function atualizarAnexos(name, value) {
    setEtapaCadastro({
      ...etapaCadastro,
      [name]: value,
    });
  }

  async function navegarForm(newObject) {
    setEtapaCadastro({
      ...etapaCadastro,
      ...newObject,
    });
  }

  async function updateForm() {
    //console.log("{DADOS}", dados);
    const host = "http://10.0.12.10:3001";
    try {
      const tokenUser = await AsyncStorage.getItem("tokenPL");

      const response = await fetch(`${host}/doctor/edit`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: tokenUser,
        },
        body: JSON.stringify({...etapaCadastro, id: user.user.id}),
      });

      //console.log(response)
      if (!response) {
        throw new Error("Ocorreu um erro ao atualizar os dados");
      }

      const responseData = await response.json();
      console.log("Dados atualizados com sucesso:", responseData.id);
    } catch (error) {
      console.error(
        "Ocorreu um erro ao atualizar os dados:",
        JSON.stringify(error)
      );
    }
  }

  console.log('LOGAR => ',etapaCadastro)

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        signIn,
        signUp,
        updateForm,
        atualizarAnexos,
        etapaCadastro,
        navegarForm
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
