import * as React from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

interface IIconProps {
    scale: '1x' | '2x';
}

const Icon: FunctionComponent<IIconProps> = props => (
    <IconPlaceholder className={ props.scale }/>
);

const IconPlaceholder = styled.div`
    background-color: rgba(0, 0, 0, .5);
    border-radius: 50%;
    &.1x {
        width: 20px;
        height: 20px;
    }
    &.2x {
        width: 40px;
        height: 40px;
    }
`;

export default Icon;