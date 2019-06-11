import * as React from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

interface IButtonProps {
    type?: 'submit';
}

const Button: FunctionComponent<IButtonProps> = props => (
    <StyledButton { ...props }>
        { props.children }
    </StyledButton>
);

const StyledButton = styled.button`
    width: 150px;
    height: 40px;
    border: 1px solid white;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 4px;
    color: white;
    font-size: var(--font-size-m);
`;

export default Button;