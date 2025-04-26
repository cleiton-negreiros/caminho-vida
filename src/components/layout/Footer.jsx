// src/components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <FooterLogo>
            <LogoText>Caminho Vida</LogoText>
            <Tagline>Reeducação Alimentar</Tagline>
          </FooterLogo>
          
          <FooterNav>
            <FooterNavTitle>Links Rápidos</FooterNavTitle>
            <FooterNavList>
              <FooterNavItem>
                <FooterNavLink to="/">Início</FooterNavLink>
              </FooterNavItem>
              <FooterNavItem>
                <FooterNavLink to="/sobre">Sobre</FooterNavLink>
              </FooterNavItem>
              <FooterNavItem>
                <FooterNavLink to="/programa">Programa</FooterNavLink>
              </FooterNavItem>
              <FooterNavItem>
                <FooterNavLink to="/depoimentos">Depoimentos</FooterNavLink>
              </FooterNavItem>
              <FooterNavItem>
                <FooterNavLink to="/contato">Contato</FooterNavLink>
              </FooterNavItem>
            </FooterNavList>
          </FooterNav>
          
          <FooterContact>
            <FooterNavTitle>Contato</FooterNavTitle>
            <ContactInfo>contato@caminhovida.com.br</ContactInfo>
            <SocialLinks>
              <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </SocialLink>
              <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </SocialLink>
              <SocialLink href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </SocialLink>
            </SocialLinks>
          </FooterContact>
        </FooterContent>
        
        <Copyright>
          &copy; {new Date() .getFullYear()} Caminho Vida. Todos os direitos reservados.
        </Copyright>
      </div>
    </FooterContainer>
  );
};

// Estilos com styled-components
const FooterContainer = styled.footer`
  background-color: var(--light-bg);
  padding: 4rem 0 2rem;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const FooterLogo = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoText = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary-color);
  margin: 0;
`;

const Tagline = styled.span`
  font-size: 0.9rem;
  color: var(--secondary-color);
  margin-bottom: 1rem;
`;

const FooterNav = styled.div``;

const FooterNavTitle = styled.h3`
  font-size: 1.2rem;
  color: var(--text-color);
  margin-bottom: 1.5rem;
`;

const FooterNavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterNavItem = styled.li`
  margin-bottom: 0.8rem;
`;

const FooterNavLink = styled(Link)`
  color: var(--dark-gray);
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary-color);
  }
`;

const FooterContact = styled.div``;

const ContactInfo = styled.p`
  color: var(--dark-gray);
  margin-bottom: 1.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: var(--white);
  font-size: 1.2rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: var(--primary-dark);
  }
`;

const Copyright = styled.div`
  text-align: center;
  color: var(--dark-gray);
  font-size: 0.9rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export default Footer;
