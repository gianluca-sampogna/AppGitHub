import React, { createContext, useState, ReactNode, SetStateAction, Dispatch } from "react";

interface User {
  login: string;
  avatar_url: string;
  url: string;
  id?: number;
}

interface LoginContextType {
  auth: boolean;
  nameGitHub: string;
  favoritos: Array<User>;
  setAuth: Dispatch<SetStateAction<boolean>>;
  setNameGitHub: Dispatch<SetStateAction<string>>;
  addFavoritos: (login: string, avatar_url: string, url: string, id?: number) => void;
  removeFavoritos: (login: string) => void;
  isFavorite: (login: string) => boolean; 
}

export const LoginContext = createContext<LoginContextType>({
  auth: false,
  nameGitHub: "",
  favoritos: [],
  setAuth: (autenticado: boolean): void => {},
  setNameGitHub: (nomeGitHub: string): void => {},
  addFavoritos: (login: string, avatar_url: string, url: string, id?: number): void => {},
  removeFavoritos: (login: string): void => {},
  isFavorite: (login: string): boolean => false, 
});

export const LoginProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [auth, setAuth] = useState<boolean>(false);
  const [nameGitHub, setNameGitHub] = useState<string>('');
  const [favoritos, setFavoritos] = useState<Array<User>>([]);

  const addFavoritos = (login: string, avatar_url: string, url: string, id?: number): void => {
    const listFavoritos = [...favoritos];
    const usuario = { login: login, avatar_url: avatar_url, url: url, id:id };
    listFavoritos.push(usuario);
    setFavoritos(listFavoritos);
  };

  const removeFavoritos = (login: string): void => {
    const novaListaFavoritos = favoritos.filter((usuario) => usuario.login !== login);
    setFavoritos(novaListaFavoritos);
  };

  const isFavorite = (login: string): boolean => {
    return favoritos.some((usuario) => usuario.login === login); 
  };

  return (
    <LoginContext.Provider value={{ auth, setAuth, nameGitHub, setNameGitHub, favoritos, addFavoritos, removeFavoritos, isFavorite }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
