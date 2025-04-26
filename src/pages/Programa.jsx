import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

const Programa = () => {
  return (
    <ProgramaContainer>
      <HeroSection>
        <h1>Nosso Programa</h1>
        <p>Reeducação alimentar personalizada para resultados duradouros</p>
      </HeroSection>
      
      <ContentSection>
        <h2>Como Funciona</h2>
        <p>O programa Caminho Vida é estruturado em etapas progressivas, respeitando o seu ritmo e necessidades individuais.</p>
        
        <StepsContainer>
          <StepCard>
            <StepNumber>1</StepNumber>
            <h3>Avaliação Inicial</h3>
            <p>Análise completa do seu histórico alimentar, rotina e objetivos para criar um plano personalizado.</p>
          </StepCard>
          
          <StepCard>
            <StepNumber>2</StepNumber>
            <h3>Plano Personalizado</h3>
            <p>Desenvolvimento de um plano alimentar adequado às suas necessidades e estilo de vida.</p>
          </StepCard>
          
          <StepCard>
            <StepNumber>3</StepNumber>
            <h3>Acompanhamento</h3>
            <p>Suporte contínuo com consultas regulares para ajustes e orientações durante todo o processo.</p>
          </StepCard>
          
          <StepCard>
            <StepNumber>4</StepNumber>
            <h3>Educação Nutricional</h3>
            <p>Aprenda sobre nutrição e desenvolva autonomia para fazer escolhas alimentares saudáveis.</p>
          </StepCard>
        </StepsContainer>
        
        <BenefitsSection>
          <h2>Benefícios</h2>
          <BenefitsList>
            <BenefitItem>Perda de peso saudável e duradoura</BenefitItem>
            <BenefitItem>Melhora da disposição e energia</BenefitItem>
            <BenefitItem>Redução de problemas digestivos</BenefitItem>
            <BenefitItem>Melhora de parâmetros clínicos (colesterol, glicemia, etc.)</BenefitItem>
            <BenefitItem>Desenvolvimento de hábitos alimentares saudáveis</BenefitItem>
            <BenefitItem>Melhor relação com a comida</BenefitItem>
          </BenefitsList>
        </BenefitsSection>
        
        <CTASection>
          <h2>Pronto para Começar?</h2>
          <p>Inicie sua jornada para uma vida mais saudável hoje mesmo!</p>
          <CTAButton to="/inscricao">Quero Começar!</CTAButton>
        </CTASection>
      </ContentSection>
    </ProgramaContainer>
  );
};

const ProgramaContainer = styled.div`
  padding-top: 80px;
`;

const HeroSection = styled.div`
  background: linear-gradient(to bottom, #ffffff, #fff0f3);
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
  max-width: 1000px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  background: linear-gradient(to bottom, #fff0f3, #ffffff);
`;

const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

const StepCard = styled.div`
  background-color: var(--white);
  border-radius: 8px;
  padding: 2rem 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  
  h3 {
    color: var(--primary-color);
    margin: 1rem 0;
  }
  
  p {
    font-size: 0.9rem;
  }
`;

const StepNumber = styled.div`
  background-color: var(--primary-color);
  color: var(--white);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  margin: 0 auto;
`;

const BenefitsSection = styled.div`
  margin: 4rem 0;
  background: linear-gradient(to bottom, #ffffff, #fff0f3);
  padding: 3rem 0;
`;

const BenefitsList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;

const BenefitItem = styled.li`
  padding: 1rem;
  background-color: var(--gray);
  border-left: 4px solid var(--primary-color);
  border-radius: 4px;
`;

const CTASection = styled.div`
  text-align: center;
  margin: 4rem 0 2rem;
  padding: 3rem;
  background-color: var(--light-bg);
  border-radius: 8px;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background-color: var(--primary-color);
  color: var(--white);
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  margin-top: 1.5rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: var(--primary-dark);
  }
`;

export default Programa;

