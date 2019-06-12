import * as React from 'react';
import { ChangeEvent, FunctionComponent } from 'react';
import styled from 'styled-components';

interface IFormInputProps {
    type: 'text' | 'number' | 'email';
    value: string;
    placeholder?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: FunctionComponent<IFormInputProps> = props => (
    <Input { ...props }/>
);

const Input = styled.input`
    width: 100%;
    height: 40px;
    padding: 5px 10px 5px 10px;
    border: 1px solid white;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 4px;
    color: white;
    font-size: var(--font-size-m);
`;

export default FormInput;