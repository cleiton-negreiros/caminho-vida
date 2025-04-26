import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import { FaCheckCircle, FaUserGraduate, FaClock, FaCalendarAlt } from 'react-icons/fa';

const CaminhoVida = () => {
  return (
    <PageContainer>
      <HeroSection>
        <HeroContent>
          <Subtitle>Programa de Transformação</Subtitle>
          <Title>Caminho Vida</Title>
          <Description>
            Reeducação alimentar personalizada para resultados duradouros e uma nova relação com a comida
          </Description>
          <CTAButton to="/inscricao">Quero Transformar Minha Vida</CTAButton>
        </HeroContent>
      </HeroSection>

      <HighlightsSection>
        <HighlightCard>
          <FaUserGraduate size={40} />
          <h3>Acompanhamento Personalizado</h3>
          <p>Suporte individual com nutricionista especializada</p>
        </HighlightCard>
        <HighlightCard>
          <FaClock size={40} />
          <p>Programa de</p>
          <h3>12 Semanas</h3>
        </HighlightCard>
        <HighlightCard>
          <FaCalendarAlt size={40} />
          <h3>Próxima Turma</h3>
          <p>Início em 15 de Julho</p>
        </HighlightCard>
      </HighlightsSection>

      <AboutSection>
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

      <BenefitsSection>
        <SectionTitle>O Que Você Vai Conquistar</SectionTitle>
        <BenefitsList>
          <BenefitItem>
            <FaCheckCircle />
            <p>Perda de peso saudável e duradoura</p>
          </BenefitItem>
          <BenefitItem>
            <FaCheckCircle />
            <p>Melhora da disposição e energia no dia a dia</p>
          </BenefitItem>
          <BenefitItem>
            <FaCheckCircle />
            <p>Redução de problemas digestivos</p>
          </BenefitItem>
          <BenefitItem>
            <FaCheckCircle />
            <p>Melhora de parâmetros clínicos (colesterol, glicemia)</p>
          </BenefitItem>
          <BenefitItem>
            <FaCheckCircle />
            <p>Desenvolvimento de hábitos alimentares saudáveis</p>
          </BenefitItem>
          <BenefitItem>
            <FaCheckCircle />
            <p>Melhor relação com a comida e seu corpo</p>
          </BenefitItem>
        </BenefitsList>
      </BenefitsSection>

      <ProgramContentSection>
        <SectionTitle>O Que Inclui o Programa</SectionTitle>
        <ModulesList>
          <ModuleItem>
            <ModuleNumber>1</ModuleNumber>
            <ModuleContent>
              <h3>Avaliação Inicial Completa</h3>
              <p>Análise detalhada do seu histórico alimentar, rotina, preferências e objetivos para criar um plano totalmente personalizado.</p>
            </ModuleContent>
          </ModuleItem>
          <ModuleItem>
            <ModuleNumber>2</ModuleNumber>
            <ModuleContent>
              <h3>Plano Alimentar Personalizado</h3>
              <p>Desenvolvimento de um plano alimentar adequado às suas necessidades, preferências e estilo de vida, com opções flexíveis e práticas.</p>
            </ModuleContent>
          </ModuleItem>
          <ModuleItem>
            <ModuleNumber>3</ModuleNumber>
            <ModuleContent>
              <h3>Consultas Quinzenais</h3>
              <p>6 consultas de acompanhamento ao longo de 12 semanas para ajustes, orientações e suporte contínuo durante todo o processo.</p>
            </ModuleContent>
          </ModuleItem>
          <ModuleItem>
            <ModuleNumber>4</ModuleNumber>
            <ModuleContent>
              <h3>Material Educativo Exclusivo</h3>
              <p>Acesso a e-books, guias práticos e vídeos educativos sobre nutrição, preparação de refeições e estratégias para situações desafiadoras.</p>
            </ModuleContent>
          </ModuleItem>
          <ModuleItem>
            <ModuleNumber>5</ModuleNumber>
            <ModuleContent>
              <h3>Grupo de Apoio</h3>
              <p>Participação em grupo exclusivo com outros participantes para troca de experiências, receitas e motivação mútua.</p>
            </ModuleContent>
          </ModuleItem>
          <ModuleItem>
            <ModuleNumber>6</ModuleNumber>
            <ModuleContent>
              <h3>Suporte Contínuo</h3>
              <p>Canal direto com a nutricionista para dúvidas e orientações entre as consultas, garantindo que você nunca se sinta desamparado.</p>
            </ModuleContent>
          </ModuleItem>
        </ModulesList>
      </ProgramContentSection>

      <TestimonialsSection>
        <SectionTitle>Histórias de Sucesso</SectionTitle>
        <TestimonialCards>
          <TestimonialCard>
            <TestimonialImage src="/placeholder-person1.jpg" alt="Maria Silva" />
            <TestimonialContent>
              <p>"O programa Caminho Vida mudou completamente minha relação com a comida. Perdi 15kg em 6 meses de forma saudável e, o mais importante, aprendi a manter meu peso sem sofrimento."</p>
              <TestimonialName>Maria Silva</TestimonialName>
              <TestimonialResult>Perdeu 15kg em 6 meses</TestimonialResult>
            </TestimonialContent>
          </TestimonialCard>
          <TestimonialCard>
            <TestimonialImage src="/placeholder-person2.jpg" alt="João Oliveira" />
            <TestimonialContent>
              <p>"Depois de tentar várias dietas sem sucesso, encontrei o Caminho Vida. A abordagem de reeducação alimentar me ajudou a perder peso e melhorar minha saúde de forma sustentável."</p>
              <TestimonialName>João Oliveira</TestimonialName>
              <TestimonialResult>Perdeu 20kg em 8 meses</TestimonialResult>
            </TestimonialContent>
          </TestimonialCard>
        </TestimonialCards>
        <MoreTestimonialsButton to="/depoimentos">Ver Mais Depoimentos</MoreTestimonialsButton>
      </TestimonialsSection>

      <PricingSection>
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
              <FaCheckCircle />
              <p>Avaliação inicial completa</p>
            </PricingFeature>
            <PricingFeature>
              <FaCheckCircle />
              <p>Plano alimentar personalizado</p>
            </PricingFeature>
            <PricingFeature>
              <FaCheckCircle />
              <p>6 consultas de acompanhamento</p>
            </PricingFeature>
            <PricingFeature>
              <FaCheckCircle />
              <p>Material educativo exclusivo</p>
            </PricingFeature>
            <PricingFeature>
              <FaCheckCircle />
              <p>Grupo de apoio</p>
            </PricingFeature>
            <PricingFeature>
              <FaCheckCircle />
              <p>Suporte contínuo</p>
            </PricingFeature>
          </PricingFeatures>
          <PricingCTA to="/inscricao">Quero Começar Agora</PricingCTA>
        </PricingCard>
      </PricingSection>

      <FAQSection>
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
          <FAQItem>
            <FAQQuestion>Quanto tempo leva para ver resultados?</FAQQuestion>
            <FAQAnswer>
              Os resultados variam de pessoa para pessoa, mas a maioria dos participantes começa a notar mudanças positivas nas primeiras 2-3 semanas. Além da perda de peso, muitos relatam melhora na disposição, qualidade do sono e digestão logo no início do programa.
            </FAQAnswer>
          </FAQItem>
          <FAQItem>
            <FAQQuestion>As consultas são presenciais ou online?</FAQQuestion>
            <FAQAnswer>
              Oferecemos ambas as opções. Você pode escolher entre consultas presenciais em nosso consultório em São Paulo ou consultas online via videoconferência, de acordo com sua preferência e disponibilidade.
            </FAQAnswer>
          </FAQItem>
        </FAQList>
      </FAQSection>

      <CTASection>
        <CTAContent>
          <h2>Pronto para Transformar sua Relação com a Alimentação?</h2>
          <p>Vagas limitadas para a próxima turma. Garanta já a sua!</p>
          <CTAButton to="/inscricao">Quero Participar</CTAButton>
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

