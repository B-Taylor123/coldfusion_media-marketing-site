import * as React from 'react';
import { Fragment, FunctionComponent } from 'react';
import styled from 'styled-components';

import HeaderBar from '../../base/header_bar';
import FullViewportSection from '../../../layout/full_viewport_section';

const UnderConstruction: FunctionComponent = () => (
    <Fragment>
        <HeaderBar/>

        <FullViewportSection clear="header">
            <UnderConstructionWrapper>
                <h1> This page is currently under construction </h1>
            </UnderConstructionWrapper>
        </FullViewportSection>
    </Fragment>
);

const UnderConstructionWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default UnderConstruction;