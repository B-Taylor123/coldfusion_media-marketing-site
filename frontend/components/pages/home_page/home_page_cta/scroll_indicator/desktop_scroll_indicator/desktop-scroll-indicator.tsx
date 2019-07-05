import * as React from 'react';
import { FunctionComponent } from 'react';
import styled, { keyframes } from 'styled-components';

const DesktopScrollIndicator: FunctionComponent = () => (
    <Mouse xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 130" preserveAspectRatio="xMidYMid meet">
        <g fill="none" fillRule="evenodd">
            <rect width="70" height="118" x="1.5" y="1.5" stroke="#FFF" strokeWidth="3" rx="36"/>
            <MouseScroll cx="36.5" cy="31.5" r="4.5" fill="#FFF"/>
        </g>
    </Mouse>
);

const Mouse = styled.svg`
    max-width: 2.5rem;
    width: 100%;
    height: auto;
`;

const scroll = keyframes`
    0%, 20% {
        transform: translateY(0) scaleY(1);
    }

    10% {
        opacity: 1;
    }

    100% {
        transform: translateY(36px) scaleY(2);
        opacity: 0.01;
    }
`;

const MouseScroll = styled.circle`
    animation-name: ${ scroll };
    animation-duration: 1.5s;
    animation-timing-function: cubic-bezier(0.650, -0.550, 0.250, 1.500);
    animation-iteration-count: infinite;
    transform-origin: 50% 20.5px;
    will-change: transform;
`;

export default DesktopScrollIndicator;