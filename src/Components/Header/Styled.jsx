import styled, { css } from "styled-components";

const center = css`
display: flex;
justify-content: center;
align-items: center;
`
export const Header = styled.header`
/* border: solid 1px red; */
height: 15vh;
${center}
justify-content: space-evenly;
`
export const BoxMenu = styled.nav`
/* border: solid 1px red; */
width: 50vw;
ul{
    ${center}
    justify-content: space-around;
    font-size: 23px;
    font-weight: 700;
    a{
        text-decoration: none;
        color: #454C59;
    }
}
`
export const BoxIcon = styled.div`
/* border: solid 1px red; */
font-size: 30px;
color: #057d92;
width: 8vw;
${center}
justify-content: space-between;
a{
    color: #057d92;
}
`
