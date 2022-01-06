import React from "react";
import useFetch from "../hooks/useFetch";

import { Container } from "../styles/components/Profile";

const Profile: React.FC = () => {
  const { data, error } = useFetch("https://api.github.com/users/adairjuneoaf");

  if (error) {
    return <div>Erro ao carregar dados.</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <img src={data.avatar_url} alt="Imagem de perfil" />
      <h3>{data.name}</h3>
      <p>{data.bio}</p>
    </Container>
  );
};

export default Profile;
