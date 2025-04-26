import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import { FaCheckCircle, FaUserGraduate, FaClock, FaCalendarAlt } from 'react-icons/fa';

const CaminhoVida = () => {
  return (
    <PageContainer>
      <HeroSection id="hero">
        <HeroContent>
          <Subtitle>Programa de Transformação</Subtitle>
          <Title>Caminho Vida</Title>
          <Description>
            Reeducação alimentar personalizada para resultados duradouros e uma nova relação com a comida
          </Description>
          <CTAButton as="a" href="https://hotmart.com/pt-br/marketplace/produtos/caminho-vida-reeducacao-alimentar/Y95708139K" target="_blank" rel="noopener noreferrer">
            Quero Transformar Minha Vida
          </CTAButton>
        </HeroContent>
      </HeroSection>

      <VideoSection id="video">
        <VideoContainer>
          <VideoTitle>Quanto tempo você já perdeu buscando soluções rápidas?</VideoTitle>
          <VideoSubtitle>Assista o conteúdo gratuito que preparei para você:</VideoSubtitle>
          <ResponsiveVideoWrapper>
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/J8p8a6J59ZY" 
              title="Conteúdo gratuito sobre reeducação alimentar" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </ResponsiveVideoWrapper>
        </VideoContainer>
      </VideoSection>

      <HighlightsSection id="destaques">
        <HighlightCard>
          <FaUserGraduate size={40} aria-hidden="true" />
          <h3>Acompanhamento Personalizado</h3>
          <p>Suporte individual com nutricionista especializada</p>
        </HighlightCard>
        <HighlightCard>
          <FaClock size={40} aria-hidden="true" />
          <p>Programa de</p>
          <h3>12 Semanas</h3>
        </HighlightCard>
        <HighlightCard>
          <FaCalendarAlt size={40} aria-hidden="true" />
          <h3>Próxima Turma</h3>
          <p>Início em 15 de Julho</p>
        </HighlightCard>
      </HighlightsSection>

      <AboutSection id="sobre-programa">
        <SectionTitle>O Que é o Caminho Vida?</SectionTitle>
        <TwoColumnLayout>
          <div>
            <p>
              O <strong>Caminho Vida</strong> é um programa completo de reeducação alimentar desenvolvido pela nutricionista Ingrid P., com mais de 10 anos de experiência clínica.
            </p>
            <p>
              Diferente de dietas restritivas que prometem resultados rápidos mas insustentáveis, nosso programa foca em uma transformação gradual e duradoura dos seus hábitos alimentares.
            </p>
            <p>
              Através de um acompanhamento personalizado, você aprenderá a fazer escolhas alimentares conscientes, desenvolverá uma relação saudável com a comida e alcançará seus objetivos de saúde de forma sustentável.
            </p>
          </div>
          <ImagePlaceholder>
            <img src="/placeholder-program.jpg" alt="Programa Caminho Vida" />
          </ImagePlaceholder>
        </TwoColumnLayout>
      </AboutSection>

      <BenefitsSection id="beneficios">
        <SectionTitle>O Que Você Vai Conquistar</SectionTitle>
        <BenefitsList>
          <BenefitItem>
            <FaCheckCircle aria-hidden="true" />
            <p>Perda de peso saudável e duradoura</p>
          </BenefitItem>
          <BenefitItem>
            <FaCheckCircle aria-hidden="true" />
            <p>Melhora da disposição e energia no dia a dia</p>
          </BenefitItem>
          <BenefitItem>
            <FaCheckCircle aria-hidden="true" />
            <p>Redução de problemas digestivos</p>
          </BenefitItem>
          <BenefitItem>
            <FaCheckCircle aria-hidden="true" />
            <p>Melhora de parâmetros clínicos (colesterol, glicemia)</p>
          </BenefitItem>
          <BenefitItem>
            <FaCheckCircle aria-hidden="true" />
            <p>Desenvolvimento de hábitos alimentares saudáveis</p>
          </BenefitItem>
          <BenefitItem>
            <FaCheckCircle aria-hidden="true" />
            <p>Melhor relação com a comida e seu corpo</p>
          </BenefitItem>
        </BenefitsList>
      </BenefitsSection>

      <ProgramContentSection id="conteudo-programa">
        <SectionTitle>O Que Inclui o Programa</SectionTitle>
        <ModulesList>
          <ModuleItem>
            <ModuleNumber aria-hidden="true">1</ModuleNumber>
            <ModuleContent>
              <h3>Avaliação Inicial Completa</h3>
              <p>Análise detalhada do seu histórico alimentar, rotina, preferências e objetivos para criar um plano totalmente personalizado.</p>
            </ModuleContent>
          </ModuleItem>
          <ModuleItem>
            <ModuleNumber aria-hidden="true">2</ModuleNumber>
            <ModuleContent>
              <h3>Plano Alimentar Personalizado</h3>
              <p>Desenvolvimento de um plano alimentar adequado às suas necessidades, preferências e estilo de vida, com opções flexíveis e práticas.</p>
            </ModuleContent>
          </ModuleItem>
          <ModuleItem>
            <ModuleNumber aria-hidden="true">3</ModuleNumber>
            <ModuleContent>
              <h3>Consultas Quinzenais</h3>
              <p>Acompanhamento regular para ajustes, esclarecimento de dúvidas e suporte contínuo durante todo o programa.</p>
            </ModuleContent>
          </ModuleItem>
        </ModulesList>
      </ProgramContentSection>

      <PricingSection id="investimento">
        <SectionTitle>Investimento</SectionTitle>
        <PricingCard>
          <PricingHeader>
            <h3>Programa Completo</h3>
            <PricingPeriod>12 semanas de transformação</PricingPeriod>
          </PricingHeader>
          <PricingValue>
            <span>R$</span>1.997
            <PricingInstallment>ou 12x de R$189</PricingInstallment>
          </PricingValue>
          <PricingFeatures>
            <PricingFeature>
              <FaCheckCircle aria-hidden="true" />
              <p>Avaliação inicial completa</p>
            </PricingFeature>
            <PricingFeature>
              <FaCheckCircle aria-hidden="true" />
              <p>Plano alimentar personalizado</p>
            </PricingFeature>
            <PricingFeature>
              <FaCheckCircle aria-hidden="true" />
              <p>6 consultas de acompanhamento</p>
            </PricingFeature>
            <PricingFeature>
              <FaCheckCircle aria-hidden="true" />
              <p>Material educativo exclusivo</p>
            </PricingFeature>
            <PricingFeature>
              <FaCheckCircle aria-hidden="true" />
              <p>Grupo de apoio</p>
            </PricingFeature>
          </PricingFeatures>
          <PricingCTA as="a" href="https://hotmart.com/pt-br/marketplace/produtos/caminho-vida-reeducacao-alimentar/Y95708139K" target="_blank" rel="noopener noreferrer">
            Quero Participar
          </PricingCTA>
        </PricingCard>
      </PricingSection>

      <FAQSection id="perguntas-frequentes">
        <SectionTitle>Perguntas Frequentes</SectionTitle>
        <FAQList>
          <FAQItem>
            <FAQQuestion>O programa funciona para qualquer pessoa?</FAQQuestion>
            <FAQAnswer>
              Sim! O programa Caminho Vida é personalizado para atender às necessidades individuais de cada pessoa, independentemente da idade, peso atual ou histórico alimentar. Adaptamos o plano de acordo com suas características específicas.
            </FAQAnswer>
          </FAQItem>
          <FAQItem>
            <FAQQuestion>Preciso comprar alimentos especiais ou suplementos?</FAQQuestion>
            <FAQAnswer>
              Não. Nosso programa utiliza alimentos comuns, acessíveis e naturais. Não exigimos a compra de produtos específicos ou suplementos, a menos que haja uma necessidade nutricional identificada durante a avaliação.
            </FAQAnswer>
          </FAQItem>
        </FAQList>
      </FAQSection>

      <CTASection id="comece-agora">
        <CTAContent>
          <h2>Pronto para Transformar sua Relação com a Alimentação?</h2>
          <p>Vagas limitadas para a próxima turma. Garanta já a sua!</p>
          <CTAButton as="a" href="https://hotmart.com/pt-br/marketplace/produtos/caminho-vida-reeducacao-alimentar/Y95708139K" target="_blank" rel="noopener noreferrer">
            Quero Participar
          </CTAButton>
        </CTAContent>
      </CTASection>
    </PageContainer>
  );
};

// Estilos
const PageContainer = styled.div`
  padding-top: 80px;
`;

const HeroSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/placeholder-hero.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 100px 20px;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 15px 30px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary-dark);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const VideoSection = styled.section`
  background-color: #000;
  padding: 60px 20px;
  text-align: center;
`;

const VideoContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const VideoTitle = styled.h2`
  color: white;
  font-size: 2.2rem;
  margin-bottom: 15px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  letter-spacing: 0.5px;
`;

const VideoSubtitle = styled.p`
  color: white;
  font-size: 1.3rem;
  margin-bottom: 30px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
`;

const ResponsiveVideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
`;

const HighlightsSection = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: -50px;
  padding: 0 20px;
  margin-bottom: 60px;
`;

const HighlightCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  flex: 1;
  min-width: 200px;
  max-width: 300px;
  
  h3 {
    margin: 15px 0 10px;
    color: var(--primary-color);
  }
  
  svg {
    color: var(--primary-color);
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 40px;
  color: var(--primary-color);
  position: relative;
  
  &:after {
    content: '';
    display: block;
    width: 80px;
    height: 3px;
    background-color: var(--primary-color);
    margin: 15px auto 0;
  }
`;

const AboutSection = styled.section`
  padding: 80px 20px;
  background-color: var(--light-bg);
`;

const TwoColumnLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  
  > div {
    flex: 1;
    min-width: 300px;
    
    p {
      margin-bottom: 20px;
      line-height: 1.6;
      font-size: 1.1rem;
    }
  }
`;

const ImagePlaceholder = styled.div`
  flex: 1;
  min-width: 300px;
  
  img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const BenefitsSection = styled.section`
  padding: 80px 20px;
`;

const BenefitsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const BenefitItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  
  svg {
    color: var(--primary-color);
    font-size: 1.5rem;
    margin-top: 3px;
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.5;
  }
`;

const ProgramContentSection = styled.section`
  padding: 80px 20px;
  background-color: var(--light-bg);
`;

const ModulesList = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const ModuleItem = styled.div`
  display: flex;
  margin-bottom: 30px;
  gap: 20px;
`;

const ModuleNumber = styled.div`
  background-color: var(--primary-color);
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  flex-shrink: 0;
`;

const ModuleContent = styled.div`
  h3 {
    margin-bottom: 10px;
    color: var(--primary-color);
  }
  
  p {
    line-height: 1.6;
  }
`;

const TestimonialsSection = styled.section`
  padding: 80px 20px;
  text-align: center;
`;

const TestimonialCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto 40px;
`;

const TestimonialCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  flex: 1;
  min-width: 300px;
  max-width: 500px;
`;

const TestimonialImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const TestimonialContent = styled.div`
  padding: 20px;
  
  p {
    font-style: italic;
    margin-bottom: 20px;
    line-height: 1.6;
  }
`;

const TestimonialName = styled.h4`
  color: var(--primary-color);
  margin-bottom: 5px;
`;

const TestimonialResult = styled.p`
  font-size: 0.9rem;
  color: var(--secondary-color);
  font-weight: 500;
`;

const MoreTestimonialsButton = styled(Link)`
  display: inline-block;
  background-color: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  padding: 10px 25px;
  border-radius: 50px;
  font-weight: 600;
  margin-top: 20px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
`;

const PricingSection = styled.section`
  padding: 80px 20px;
  background-color: var(--light-bg);
  text-align: center;
`;

const PricingCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  padding: 40px 30px;
  max-width: 500px;
  margin: 0 auto;
`;

const PricingHeader = styled.div`
  margin-bottom: 20px;
  
  h3 {
    color: var(--primary-color);
    font-size: 1.8rem;
    margin-bottom: 5px;
  }
`;

const PricingPeriod = styled.p`
  color: var(--text-secondary);
  font-size: 1.1rem;
`;

const PricingValue = styled.div`
  font-size: 2.5rem;
  margin-bottom: 20px;
  
  span {
    font-size: 1.5rem;
    margin-right: 5px;
  }
`;

const PricingInstallment = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
`;

const PricingFeatures = styled.div`
  margin-bottom: 20px;
`;

const PricingFeature = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

const PricingCTA = styled(Link)`
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 15px 30px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary-dark);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const FAQSection = styled.section`
  padding: 80px 20px;
`;

const FAQList = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  margin-bottom: 20px;
`;

const FAQQuestion = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: var(--primary-color);
`;

const FAQAnswer = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
`;

const CTASection = styled.section`
  padding: 80px 20px;
  background-color: var(--primary-color);
  color: white;
  text-align: center;
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export default CaminhoVida;








