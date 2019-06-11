import * as React from 'react';
import { FunctionComponent } from 'react';
import Scrollbars from 'react-custom-scrollbars';

import HeaderBar from '../base/header_bar';
import FullViewportSection from '../../layout/full_viewport_section';
import Footer from '../base/footer';
import HomePageCTA from './home_page_cta';
import HomePageServices from './home_page_services';
import HomePageContact from './home_page_contact';

const HomePage: FunctionComponent = () => {
    return(
        <Scrollbars style={{ width: '100%', height: '100%', overflow: 'hidden' }} universal>
            <HeaderBar/>

            <FullViewportSection clear="header">
                <HomePageCTA/>
            </FullViewportSection>

            <FullViewportSection>
                <HomePageServices/>
            </FullViewportSection>

            <FullViewportSection clear="footer">
                <HomePageContact/>
            </FullViewportSection>

            <Footer/>
        </Scrollbars>
    );
};

export default HomePage;