import * as React from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

import HomePageService from './home_page_service';

const HomePageServices: FunctionComponent = () => (
    <HomePageServicesWrapper>
        <HomePageService
            title="Software Development"
            shortBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>

        <HomePageService
            title="Process Refinement"
            shortBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>

        <HomePageService
            title="Social Media Marketing"
            shortBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>

        <HomePageService
            title="Photo & Video"
            shortBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
    </HomePageServicesWrapper>
);

const HomePageServicesWrapper = styled.div`
    width: 90%;
    height: 100%;
    margin: 0 5% 0 5%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export default HomePageServices;