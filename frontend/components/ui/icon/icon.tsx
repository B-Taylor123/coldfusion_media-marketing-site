import * as React from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

enum Icons {
    laptopCodeSolid,
    chartLineSolid
}

interface IIconProps {
    scale: 'x1' | 'x2';
    iconName?: Icons;
}

const Icon: FunctionComponent<IIconProps> = props => {
    if (typeof props.iconName === 'undefined') return(<IconPlaceholder className={ props.scale }/>);

    const icon = getIcon(props.iconName);

    if (!icon) return(<IconPlaceholder className={ props.scale }/>);

    return(<StyledImage src={ icon.path } alt={ icon.altText } className={ props.scale }/>);
};

const getIcon = (iconName: Icons) => {
    switch (iconName) {
        case Icons.laptopCodeSolid:
            return { key: Icons.laptopCodeSolid, path: '/static/assets/icons/laptop-code-solid.svg', altText: 'Icon showing laptop with code symbol on screen' };
        case Icons.chartLineSolid:
            return { key: Icons.chartLineSolid, path: '/static/assets/icons/chart-line-solid.svg', altText: 'Chart icon' };
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

const StyledImage = styled.img`
    fill: white;
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