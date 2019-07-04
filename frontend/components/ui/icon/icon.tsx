import * as React from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faChartLine, IconDefinition } from '@fortawesome/free-solid-svg-icons';

enum Icons {
    laptopCodeSolid,
    chartLineSolid
}

interface IIconProps {
    scale: '1x' | '2x';
    iconName?: Icons;
}

const Icon: FunctionComponent<IIconProps> = props => {
    if (typeof props.iconName === 'undefined') return(<IconPlaceholder className={ props.scale }/>);

    const icon = getIcon(props.iconName);

    if (!icon) return(<IconPlaceholder className={ props.scale }/>);

    return(<FontAwesomeIcon icon={ icon } size={ props.scale } color="white"/>);
};

const getIcon = (iconName: Icons): IconDefinition => {
    switch (iconName) {
        case Icons.laptopCodeSolid:
            return faLaptopCode;
        case Icons.chartLineSolid:
            return faChartLine;
        default:
            return null;
    }
};

const IconPlaceholder = styled.div`
    background-color: rgba(0, 0, 0, .3);
    border-radius: 50%;
    &.1x {
        --size: 30px;
        width: var(--size);
        min-width: var(--size);
        max-width: var(--size);
        height: var(--size);
        min-height: var(--size);
        max-height: var(--size);
    }
    &.2x {
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
export { Icons };