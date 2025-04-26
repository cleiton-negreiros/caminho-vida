import React from 'react';
import styled from 'styled-components';

const Sobre = () => {
  return (
    <SobreContainer>
      <HeroSection>
        <h1>Sobre o Caminho Vida</h1>
        <p>Conheça nossa história e metodologia</p>
      </HeroSection>
      
      <ContentSection>
        <h2>Nossa História</h2>
        <p>O Caminho Vida nasceu da paixão por ajudar pessoas a transformarem suas vidas através da reeducação alimentar. Fundado pela nutricionista Ingrid P., nosso programa tem ajudado centenas de pessoas a conquistarem uma relação saudável com a alimentação.</p>
        
        <ProfileSection>
          <ProfileImage src="/placeholder-profile.jpg" alt="Nutricionista Ingrid" />
          <ProfileInfo>
            <h3>Ingrid P. - Nutricionista</h3>
            <p>Especialista em reeducação alimentar com mais de 10 anos de experiência, Ingrid desenvolveu o método Caminho Vida após anos de pesquisa e prática clínica.</p>
          </ProfileInfo>
        </ProfileSection>
        
        <h2>Nossa Metodologia</h2>
        <p>O programa Caminho Vida não é uma dieta restritiva, mas um processo de reeducação alimentar que respeita sua individualidade e estilo de vida. Trabalhamos com um método em etapas que permite mudanças graduais e sustentáveis.</p>
      </ContentSection>
    </SobreContainer>
  );
};

const SobreContainer = styled.div`
  padding-top: 80px;
`;

const HeroSection = styled.div`
  background-color: var(--light-bg);
  padding: 4rem 2rem;
  text-align: center;
  
  h1 {
    color: var(--primary-color);
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.2rem;
    color: var(--text-color);
  }
`;

const ContentSection = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  
  h2 {
    color: var(--primary-color);
    margin: 2rem 0 1rem;
  }
  
  p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 2rem 0;
  padding: 1.5rem;
  background-color: var(--gray);
  border-radius: 8px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
`;

const ProfileInfo = styled.div`
  h3 {
    color: var(--primary-color);
    margin-bottom: 0.5rem;
  }
`;

export default Sobre;