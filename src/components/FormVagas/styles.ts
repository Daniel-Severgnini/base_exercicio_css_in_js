import styled from 'styled-components'

// FormContainer é um formulário HTML
export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`

// CampoInput é um input HTML
export const CampoInput = styled.input`
  padding: 0 16px;
  outline-color: var(--cor-principal);
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`

// BotaoPesquisar é um button HTML
export const BotaoPesquisar = styled.button`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    margin-left: 0;
  }
`
