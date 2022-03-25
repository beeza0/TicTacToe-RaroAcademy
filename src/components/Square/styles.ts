import styled from "styled-components";

export const SquareContainer = styled.div<{ selected: boolean}>`
    height: 9em;
    width: 9em;
    background-color: yellow;
    border: solid;
    border-color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: ${props => (props.selected ? 'default' : 'pointer')};
    &:hover {
        background-color: ${props => (props.selected ? '' : 'red')};
    }
}
`

export const Symbol = styled.span`
    font-size: 8em;
}
`