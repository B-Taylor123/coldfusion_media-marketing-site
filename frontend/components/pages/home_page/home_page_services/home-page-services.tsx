import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import HomePageService from './home_page_service';
import StyledH2 from '../../../layout/styled_elements/styled_h2';
import { Icons } from '../../../ui/icon';

const HomePageServices: FunctionComponent = () => (
    <HomePageServicesWrapper>
        <HomePageServicesHeader>
            <StyledH2> Services </StyledH2>

            <p> We offer a range of services that we can either consult on or provide in house </p>
        </HomePageServicesHeader>

        <HomePageServicesRow>
            <HomePageService
                title="Software Development"
                shortBody="We have a wealth of commercial experiance creating everything from promotional websites to enterprise grade web applications and mobile apps which we can apply to creating your perfect application."
                iconName={ Icons.laptopCode }/>

            <HomePageService
                title="Process Refinement"
                shortBody="We can analyze your business or manufacturing processes and advise you on the most meaningful optimisations and automations and where apropriate craft bespoke software and hardware to... [WHAT WILL IT DO]"
                iconName={ Icons.chartLine }/>

            <HomePageService
                title="Social Media Marketing"
                shortBody="We can ensure your next social media marketing campmaign is a success, either by advising on the execution of existing plans and campains or designing a slick new campaign tailored to your target audience."
                iconName={ Icons.ad }/>

            <HomePageService
                title="Photo & Video"
                shortBody="We can provide anything from product photgraphy, corporate headshots and real estate photgraphy to... [VIDEO PRODUCTS]"
                iconName={ Icons.camera }/>
        </HomePageServicesRow>
    </HomePageServicesWrapper>
);

const HomePageServicesWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

const HomePageServicesHeader = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    p {
        font-size: var(--font-size-s);
    }
`;

const HomePageServicesRow = styled.div`
    width: 90%;
    height: 80%;
    margin: 0 5% 0 5%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export default HomePageServices;