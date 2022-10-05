import styled from "styled-components";

export const Vtext = styled.p`
    display: block;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-style: ${({ italic }) => italic ? 'italic' : 'normal'};
    color: ${({ color }) => color || '#555'};
    text-align: ${({ align }) =>  align || 'left'};
    text-transform: ${({ transform }) => transform || 'none'};
    text-decoration: ${({ underline, crossed }) => underline ? 'underline' : crossed ? 'line-through' : 'none'};
    font-weight: ${({ fontWeight }) => {
        switch (fontWeight) {
            case "thin":
                return 100;
            case "bold":
                return 700;
            default:
                return 400
        }
    }};
    font-size: ${({ size }) => {
        switch (size) {
            case "small":
                return 10 + 'px';
            case "big":
                return 18 + 'px';
            default:
                return 14 + 'px';
        }
    }
    };
    ${({ gradient }) => {
        if (gradient) {
            return `
        background-image: linear-gradient(${gradient.deg}deg, ${gradient.from}, ${gradient.to});
        background-clip: text;
        text-fill-color: transparent ; 
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent ;  
        
        `;
        } else { return 'none' }
    }};
    ${({ as }) => {
        if (as === 'a') { return 'color: blue;' }
    }
    }
`;