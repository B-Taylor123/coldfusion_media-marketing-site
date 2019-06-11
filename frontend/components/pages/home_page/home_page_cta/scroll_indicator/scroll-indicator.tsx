import * as React from 'react';
import { useState, useEffect, FunctionComponent } from 'react';
import styled from 'styled-components';

import DesktopScrollIndicator from './desktop_scroll_indicator';
import MobileScrollIndicator from './mobile_scroll_indicator';

const ScrollIndicator: FunctionComponent = () => {
    const [ isMobile, setIsMobile ] = useState(null);
    const [ show, setShow ] = useState(false);

    useEffect(() => {
        if (isMobile === null) setIsMobile(false);

        if (!show) setTimeout(() => setShow(true), 1000);
    });

    if (!show) return null;

    return(
        <ScrollIndicatorWrapper>
            { !isMobile ? <DesktopScrollIndicator/> : <MobileScrollIndicator/> }
        </ScrollIndicatorWrapper>
    );
};

const ScrollIndicatorWrapper = styled.div`
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
`;

export default ScrollIndicator;