import * as React from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

interface IIconProps {
    scale: 'x1' | 'x2';
}

const Icon: FunctionComponent<IIconProps> = props => (
    <IconPlaceholder className={ props.scale }/>
);

const IconPlaceholder = styled.div`
    background-color: rgba(0, 0, 0, .3);
    border-radius: 50%;
    &.x1 {
        --size: 30px;
        width: var(--size);
        min-width: var(--size);
        max-width: var(--size);
        height: var(--size);
        min-height: var(--size);
        max-height: var(--size);
    }
    &.x2 {
        --size: 60px;
        width: var(--size);
        min-width: var(--size);
        max-width: var(--size);
        height: var(--size);
        min-height: var(--size);
        max-height: var(--size);
    }
`;

export default Icon;