import styled, { css } from "styled-components";

export const Vtext = styled.p`
    display: block;
    color: ${({ color }) => color || '#555'};
    text-align: ${({ align }) => align || 'left'};
    text-transform: ${({ transform }) => transform || 'none'};
    text-decoration: ${({ underline, crossed }) => underline ? 'underline' : crossed ? 'line-through' : 'none'};

    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-style: ${({ italic }) => italic ? 'italic' : 'normal'};
    font-weight: ${({ fontWeight }) => {
        if (fontWeight === "thin") {
            return css`100`;
        } else if (fontWeight === "bold") {
            return css`700`;
        } else {
            return css`400`;
        }
    }};
    font-size: ${({ size }) => {
        if (size === "small") {
            return css`10px`;
        } else if (size === "big") {
            return css`18px`;
        } else {
            return css`14px`;
        }
    }
    };

    ${({ gradient }) => {
        if (gradient) {
            return css`
                background-image: linear-gradient(${gradient.deg}deg, ${gradient.from}, ${gradient.to});
                background-clip: text;
                text-fill-color: transparent ; 
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent ;`;
        }
    }};
    
    ${({ as }) => {
        if (as === 'a') { return css`color: blue;` }
    }
    }
`;