import * as React from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faChartLine, faCamera, faAd, IconDefinition } from '@fortawesome/free-solid-svg-icons';

enum Icons {
    laptopCode,
    chartLine,
    camera,
    ad
}

interface IIconProps {
    scale: '1x' | '2x';
    iconName?: Icons;
}

const Icon: FunctionComponent<IIconProps> = props => {
    if (typeof props.iconName === 'undefined') return(<IconPlaceholder className={ props.scale === '2x' ? 'x2' : 'x1' }/>);

    const icon = getIcon(props.iconName);

    if (!icon) return(<IconPlaceholder className={ props.scale === '2x' ? 'x2' : 'x1' }/>);

    return(<FontAwesomeIcon icon={ icon } size={ props.scale } color="white"/>);
};

const getIcon = (iconName: Icons): IconDefinition => {
    switch (iconName) {
        case Icons.laptopCode:
            return faLaptopCode;
        case Icons.chartLine:
            return faChartLine;
        case Icons.camera:
            return faCamera;
        case Icons.ad:
            return faAd;
        default:
            return null;
    }
};

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
export { Icons };