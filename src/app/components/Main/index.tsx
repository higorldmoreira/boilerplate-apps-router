import styled from 'styled-components'

const Wrapper = styled.section`
  display: grid;
  gap: 8px;
  padding-top: 8px;
`

const Heading = styled.h2`
  font-size: clamp(1.4rem, 2.2vw, 1.8rem);
  color: ${({ theme }) => theme.colors.textPrimary};
`

const Description = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
`

const Main = () => {
  return (
    <Wrapper>
      <Heading>React Avancado</Heading>
      <Description>
        Estrutura com App Router, styled-components, darkmode e cleanmode,
        pronta para crescimento do projeto.
      </Description>
    </Wrapper>
  )
}

export default Main
