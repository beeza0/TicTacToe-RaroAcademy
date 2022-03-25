import styled from "styled-components";

export const SquareContainer = styled.div`
    height: 9em;
    width: 9em;
    background-color: yellow;
    border: solid;
    border-color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
        background-color: red;
    }
}
`

export const Symbol = styled.span`
    font-size: 8em;
}
`

export const SelectedSquareContainer = styled.div`
    height: 9em;
    width: 9em;
    background-color: yellow;
    border: solid;
    border-color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
}
`