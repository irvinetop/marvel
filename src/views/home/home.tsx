import React from "react";
import Header from "../../components/Header/Header"; // Asegúrate de ajustar la ruta de importación según sea necesario
import styled from "styled-components";

const Home: React.FC = () => {
  return (
    <FullHeightContainer>
      <Header favoritesCount={5} />
      {/* Contenido de la página Home */}
    </FullHeightContainer>
  );
};

const FullHeightContainer = styled.div`
  height: 100vh;
  flex-direction: column;
`;

export default Home;
