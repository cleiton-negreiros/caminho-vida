import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Controla a transparência do header ao rolar a página
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Alterna o menu mobile
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer $scrolled={scrolled}>
      <div className="container">
        <HeaderContent>
          <Logo to="/">
            <LogoText>Caminho Vida</LogoText>
            <Tagline>Reeducação Alimentar</Tagline>
          </Logo>

          <DesktopNav>
            <NavList>
              <NavItem>
                <NavLink to="/">Início</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/sobre">Sobre</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/programa">Programa</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/depoimentos">Depoimentos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contato">Contato</NavLink>
              </NavItem>
            </NavList>
          </DesktopNav>

          <ActionButton to="/inscricao">Quero Começar!</ActionButton>

          <MobileMenuButton onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </MobileMenuButton>
        </HeaderContent>
      </div>

      {/* Menu Mobile */}
      <MobileNav $isOpen={isOpen}>
        <MobileNavList>
          <MobileNavItem>
            <MobileNavLink to="/" onClick={toggleMenu}>
              Início
            </MobileNavLink>
          </MobileNavItem>
          <MobileNavItem>
            <MobileNavLink to="/sobre" onClick={toggleMenu}>
              Sobre
            </MobileNavLink>
          </MobileNavItem>
          <MobileNavItem>
            <MobileNavLink to="/programa" onClick={toggleMenu}>
              Programa
            </MobileNavLink>
          </MobileNavItem>
          <MobileNavItem>
            <MobileNavLink to="/depoimentos" onClick={toggleMenu}>
              Depoimentos
            </MobileNavLink>
          </MobileNavItem>
          <MobileNavItem>
            <MobileNavLink to="/contato" onClick={toggleMenu}>
              Contato
            </MobileNavLink>
          </MobileNavItem>
          <MobileNavItem>
            <MobileActionButton to="/inscricao" onClick={toggleMenu}>
              Quero Começar!
            </MobileActionButton>
          </MobileNavItem>
        </MobileNavList>
      </MobileNav>
    </HeaderContainer>
  );
};

// Estilos com styled-components
const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: ${({ $scrolled }) => 
    $scrolled ? 'var(--white)' : 'transparent'};
  box-shadow: ${({ $scrolled }) => 
    $scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: all 0.3s ease;
  padding: 1rem 0;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const LogoText = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary-color);
  margin: 0;
`;

const Tagline = styled.span`
  font-size: 0.9rem;
  color: var(--secondary-color);
`;

const DesktopNav = styled.nav`
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 1rem;
`;

const NavLink = styled(Link)`
  color: var(--text-color);
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary-color);
  }
`;

const ActionButton = styled(Link)`
  background-color: var(--primary-color);
  color: var(--white);
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: var(--primary-dark);
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  font-size: 1.5rem;
  color: var(--primary-color);
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNav = styled.nav`
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  height: ${({ $isOpen }) => ($isOpen ? 'calc(100vh - 70px)' : '0')};
  background-color: var(--white);
  overflow: hidden;
  transition: height 0.3s ease;
  z-index: 999;
`;

const MobileNavList = styled.ul`
  list-style: none;
  padding: 2rem;
  margin: 0;
`;

const MobileNavItem = styled.li`
  margin-bottom: 1.5rem;
  text-align: center;
`;

const MobileNavLink = styled(Link)`
  font-size: 1.2rem;
  color: var(--text-color);
  font-weight: 500;
  
  &:hover {
    color: var(--primary-color);
  }
`;

const MobileActionButton = styled(Link)`
  display: inline-block;
  background-color: var(--primary-color);
  color: var(--white);
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  margin-top: 1rem;
  
  &:hover {
    background-color: var(--primary-dark);
  }
`;

export default Header;
