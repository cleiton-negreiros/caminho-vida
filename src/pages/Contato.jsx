import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
// Update any react-router-dom imports to react-router if needed

const Contato = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você implementaria a lógica para enviar o formulário
    console.log('Formulário enviado:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };
  
  return (
    <ContatoContainer>
      <HeroSection>
        <h1>Entre em Contato</h1>
        <p>Estamos aqui para responder suas dúvidas</p>
      </HeroSection>
      
      <ContentSection>
        <ContactGrid>
          <ContactInfo>
            <h2>Informações de Contato</h2>
            <p>Entre em contato conosco para saber mais sobre o programa Caminho Vida ou para agendar uma consulta inicial.</p>
            
            <ContactItem>
              <IconWrapper>
                <FaEnvelope />
              </IconWrapper>
              <div>
                <h3>Email</h3>
                <p>contato@caminhovida.com.br</p>
              </div>
            </ContactItem>
            
            <ContactItem>
              <IconWrapper>
                <FaPhone />
              </IconWrapper>
              <div>
                <h3>Telefone</h3>
                <p>(11) 99999-9999</p>
              </div>
            </ContactItem>
            
            <ContactItem>
              <IconWrapper>
                <FaMapMarkerAlt />
              </IconWrapper>
              <div>
                <h3>Endereço</h3>
                <p>Av. Paulista, 1000 - São Paulo, SP</p>
              </div>
            </ContactItem>
          </ContactInfo>
          
          <ContactForm onSubmit={handleSubmit}>
            <h2>Envie uma Mensagem</h2>
            
            {formSubmitted && (
              <SuccessMessage>
                Mensagem enviada com sucesso! Em breve entraremos em contato.
              </SuccessMessage>
            )}
            
            <FormGroup>
              <label htmlFor="name">Nome Completo</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="phone">Telefone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <button type="submit" disabled={formSubmitted}>
              {formSubmitted ? "Enviando..." : "Enviar"}
            </button>
          </ContactForm>
        </ContactGrid>
      </ContentSection>
    </ContatoContainer>
  );
};

const ContatoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f4f4f4;
`;

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 20px;
`;

const ContentSection = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
`;

const ContactInfo = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const IconWrapper = styled.div`
  margin-right: 10px;
`;

const ContactForm = styled.form`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const SuccessMessage = styled.div`
  background-color: #d4edda;
  color: #155724;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 15px;
`;

export default Contato;

