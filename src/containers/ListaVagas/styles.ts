import styled from 'styled-components'

export const VagasContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    max-width: 80%;
  }
`

export const VagasLista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;
  row-gap: 16px;
  margin-top: 32px;
  padding: 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
