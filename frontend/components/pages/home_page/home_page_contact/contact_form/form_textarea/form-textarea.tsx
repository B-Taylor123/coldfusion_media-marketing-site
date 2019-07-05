import * as React from 'react';
import { ChangeEvent, FunctionComponent } from 'react';
import styled from 'styled-components';

interface IFormTextAreaProps {
    value: string;
    rows: number;
    maxLength: number;
    placeholder?: string;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const FormTextArea: FunctionComponent<IFormTextAreaProps> = props => (
    <TextArea { ...props }/>
);

const TextArea = styled.textarea`
    width: 100%;
    /* height: 40px; */
    padding: 5px 10px 5px 10px;
    border: 1px solid white;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 4px;
    color: white;
    font-size: var(--font-size-m);
`;

export default FormTextArea;