import styled from 'styled-components';

export const Button = styled.button`
    background-color: var(--primary-color);
    border: none;
    border-radius: 5px;
    font-weight: bold;
    padding: .5rem;
    width: 100%;

    a{
        color: var(--dark-color);
        font-weight: bold;
    }

    :hover{
        a{
            color: var(--light-color);
        }
    }
`;

