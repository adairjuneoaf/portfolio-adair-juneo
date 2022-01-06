import React, { createContext, ReactNode } from "react";
import useSWR from "swr";

interface ApiGitHubProviderProps {
  children: ReactNode;
}

interface ApiGitHubContextProps {
  ProfileData: () => void;
}

export const ApiGitHubContext = createContext({} as ApiGitHubContextProps);

export default function ApiGitHubProvider({ children }: ApiGitHubProviderProps) {
  function ProfileData() {
    const { data, error } = useSWR("https://api.github.com/users/adairjuneoaf");

    if (error) {
      return <div>Erro ao carregar dados.</div>;
    }

    if (!data) {
      return <div>Loading...</div>;
    }

    console.log(data);
    return data;
  }
  return <ApiGitHubContext.Provider value={{ ProfileData }}>{children}</ApiGitHubContext.Provider>;
}
