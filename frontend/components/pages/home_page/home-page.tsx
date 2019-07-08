import * as React from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import Scrollbars from 'react-custom-scrollbars';

// import HeaderBar from '../base/header_bar';
import FullViewportSection from '../../layout/full_viewport_section';
import Footer from '../base/footer';
import HomePageCTA from './home_page_cta';
import HomePageServices from './home_page_services';
import HomePageContact from './home_page_contact';

const HomePage: FunctionComponent = () => {
    return(
        <Scrollbars style={{ width: '100%', height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }} universal>
            {/* <HeaderBar/> */}

            <MainContentColumn>
                <FullViewportSection> {/* clear="header" */}
                    <HomePageCTA/>
                </FullViewportSection>

                <FullViewportSection>
                    <HomePageServices/>
                </FullViewportSection>

                <FullViewportSection clear="footer">
                    <HomePageContact/>
                </FullViewportSection>
            </MainContentColumn>
            
            <Footer/>
        </Scrollbars>
    );
};

const MainContentColumn = styled.div`
    width: 100%;
    height: auto;
    max-width: 1920px;
    margin-left: auto;
    margin-right: auto;
`;

export default HomePage;