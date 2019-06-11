import * as React from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

interface IFormInputRowProps {
    doubleInputRow?: boolean;
}

const FormInputRow: FunctionComponent<IFormInputRowProps> = props => (
    <Row className={ props.doubleInputRow && 'double-input-row' }>
        { props.children }
    </Row>
);

const Row = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 0 1rem 0;
    &.double-input-row {
        input {
            width: 49%;
        }
    }
`;

export default FormInputRow;