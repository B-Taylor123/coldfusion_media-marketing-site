import * as React from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

const FormInputRow: FunctionComponent = props => (
    <Row>
        { props.children }
    </Row>
);

const Row = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
`;

export default FormInputRow;