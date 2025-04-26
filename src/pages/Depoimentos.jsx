import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

const Depoimentos = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Maria Silva',
      image: '/placeholder-person1.jpg',
      text: 'O programa Caminho Vida mudou completamente minha relação com a comida. Perdi 15kg em 6 meses de forma saudável e, o mais importante, aprendi a manter meu peso sem sofrimento.',
      result: 'Perdeu 15kg em 6 meses'
    },
    {
      id: 2,
      name: 'João Oliveira',
      image: '/placeholder-person2.jpg',
      text: 'Depois de tentar várias dietas sem sucesso, encontrei o Caminho Vida. A abordagem de reeducação alimentar me ajudou a perder peso e melhorar minha saúde de forma sustentável.',
      result: 'Perdeu 20kg em 8 meses'
    },
    {
      id: 3,
      name: 'Ana Costa',
      image: '/placeholder-person3.jpg',
      text: 'Além da perda de peso, notei uma melhora significativa na minha disposição e energia. Meus exames de sangue também melhoraram muito após seguir o programa.',
      result: 'Perdeu 12kg em 5 meses'
    },
    {
      id: 4,
      name: 'Carlos Santos',
      image: '/placeholder-person4.jpg',
      text: 'O acompanhamento personalizado fez toda a diferença. A nutricionista Ingrid realmente se preocupa com cada paciente e adapta o programa às necessidades individuais.',
      result: 'Perdeu 18kg em 7 meses'
    },
  ];

  return (
    <DepoimentosContainer>
      <HeroSection>
        <h1>Depoimentos</h1>
        <p>Histórias reais de transformação através da reeducação alimentar</p>
      </HeroSection>
      
      <ContentSection>
        <TestimonialsGrid>
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id}>
              <TestimonialImage src={testimonial.image} alt={testimonial.name} />
              <TestimonialContent>
                <h3>{testimonial.name}</h3>
                <ResultTag>{testimonial.result}</ResultTag>
                <p>"{testimonial.text}"</p>
              </TestimonialContent>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
        
        <CTASection>
          <h2>Quer fazer parte dessas histórias de sucesso?</h2>
          <p>Comece sua jornada de transformação hoje mesmo!</p>
          <CTAButton to="/inscricao">Quero Começar!</CTAButton>
        </CTASection>
      </ContentSection>
    </DepoimentosContainer>
  );
};

const DepoimentosContainer = styled.div`
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
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const TestimonialCard = styled.div`
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const TestimonialImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const TestimonialContent = styled.div`
  padding: 1.5rem;
  
  h3 {
    color: var(--primary-color);
    margin-bottom: 0.5rem;
  }
  
  p {
    font-style: italic;
    line-height: 1.6;
    margin-top: 1rem;
  }
`;

const ResultTag = styled.span`
  display: inline-block;
  background-color: var(--secondary-color);
  color: var(--white);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
`;

const CTASection = styled.div`
  text-align: center;
  margin: 4rem 0 2rem;
  padding: 3rem;
  background-color: var(--light-bg);
  border-radius: 8px;
  
  h2 {
    color: var(--primary-color);
    margin-bottom: 1rem;
  }
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

export default Depoimentos;

