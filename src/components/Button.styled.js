import styled from "styled-components";

export const Button = styled.button`
    background-color: ${ ({bgcolor}) => bgcolor || 'springGreen'};
    color: #444;
    font-size: 16px;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    margin: 1rem;
    cursor: pointer;
    border: none;
    outline: none;
    &:hover {
        color: #fff;
        background-color: green;
    }
`;