import styled from "styled-components";

export const MainContainer = styled.div`
    text-align: center;
    margin-top: 5vh;
`
export const GameTitle = styled.h1`
    font-size: 40px;
`
export const ButtonContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
`
export const RestartButton = styled.button`
    margin-top: 2em;
    width: 8em;
    align-self: center;
    background-color: #2ea44f;
    border: 2px solid rgba(27, 31, 35, .15);
    border-radius: 6px;
    color: white;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    padding: 6px 16px;
    &:hover {
        background-color: white;
        color: #2ea44f;
    }
}
`
export const EndGameSpan = styled.span`
    margin-top: 1em;
    font-weight: 500;
    font-size: 18px;
`