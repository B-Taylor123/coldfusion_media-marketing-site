import * as React from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

const HeroText: FunctionComponent = () => (
    <HeroTextWrapper>
        <HeroTextH1> ColdFusion Media </HeroTextH1>

        <HeroTextP> Crafting digital experiences and tools that excite and empower the user </HeroTextP>
    </HeroTextWrapper>
);

const HeroTextWrapper = styled.div``;

const HeroTextH1 = styled.h1`
    font-size: var(--font-size-xl);
    text-align: center;
    max-width: 95%;
    margin-top: 60px;
    margin-bottom: 60px;
`;

const HeroTextP = styled.p`
    font-size: var(--font-size-l);
    font-weight: bold;
    text-align: center;
`;

export default HeroText;