import * as React from 'react';
import { ChangeEvent, FunctionComponent } from 'react';
import styled from 'styled-components';

interface IFormInputProps {
    type: 'text'; // Add other types
    value: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void; 
}

const FormInput: FunctionComponent<IFormInputProps> = props => (
    <Input { ...props }/>
);

const Input = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid white;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 4px;
    color: white;
`;

export default FormInput;