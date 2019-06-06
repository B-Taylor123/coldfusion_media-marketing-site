import * as React from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

import HeroText from './hero_text/hero-text';
import ScrollIndicator from './scroll_indicator/scroll-indicator';

const HomePageCTA: FunctionComponent = () => (
    <Hero>
        <HeroText/>
        <ScrollIndicator/>
    </Hero>
);

const Hero = styled.div`
    width: 100%;
    height: 100%;
    padding: 2%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;


export default HomePageCTA;