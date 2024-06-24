import styled from "styled-components"


const Box = styled.div`
height: 70vh;
h2{
    font-size: 2rem;
}
`
export default function NaoEncontrado() {
  return (
    <Box>
        <h2>Produto não encontrado</h2>
    </Box>
  )
}
