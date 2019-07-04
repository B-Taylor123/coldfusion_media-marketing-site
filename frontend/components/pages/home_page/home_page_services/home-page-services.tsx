import * as React from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

import HomePageService from './home_page_service';
import { Icons } from '../../../ui/icon';

const HomePageServices: FunctionComponent = () => (
    <HomePageServicesWrapper>
        <HomePageService
            title="Software Development"
            shortBody="We have a wealth of commercial experiance creating everything from promotional websites to enterprise grade web applications and mobile apps which we can apply to creating your perfect application."
            iconName={ Icons.laptopCodeSolid }/>

        <HomePageService
            title="Process Refinement"
            shortBody="We can analyze your business or manufacturing processes and advise you on the most meaningful optimisations and automations and where apropriate craft bespoke software and hardware to... [WHAT WILL IT DO]"
            iconName={ Icons.chartLineSolid }/>

        <HomePageService
            title="Social Media Marketing"
            shortBody="We can ensure your next social media marketing campmaign is a sucess, either by advising on the execution of existing plans and campains or designing a slick new campaign tailored to your target audience."/>

        <HomePageService
            title="Photo & Video"
            shortBody="We can provide anything from product photgraphy, corporate headshots and real estate photgraphy to... [VIDEO PRODUCTS]"/>
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