import styled from "styled-components";

export default function Banner() {
    return (
        <StyledBanner />

    )
}

const StyledBanner = styled.div`
    margin: 0px;
    display: block;
    height: 300px;
    width: 100vw;
    max-width: 100%;
    background-image: url("https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
   
`
