// src/pages/Home.jsx
import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <HomeContainer>
      <h1>Caminho Vida - Reeducação Alimentar</h1>
      <p>Em construção...</p>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 80px; /* Espaço para o header fixo */
`;

export default Home;
