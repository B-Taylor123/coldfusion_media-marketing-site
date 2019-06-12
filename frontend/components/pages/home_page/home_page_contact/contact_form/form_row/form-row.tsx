import * as React from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

interface IFormRowProps {
    doubleItemRow?: boolean;
}

const FormRow: FunctionComponent<IFormRowProps> = props => (
    <Row className={ props.doubleItemRow && 'double-item-row' }>
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
    &.double-item-row {
        input {
            width: 49%;
        }
    }
`;

export default FormRow;