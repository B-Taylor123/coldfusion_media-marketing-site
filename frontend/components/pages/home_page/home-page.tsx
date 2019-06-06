import * as React from 'react';
import { FunctionComponent } from 'react';
import Scrollbars from 'react-custom-scrollbars';

import HeaderBar from '../base/header_bar';
import FullViewportSection from '../../layout/full_viewport_section';
import Footer from '../base/footer';
import HomePageCTA from './home_page_cta/home-page-cta';

const HomePage: FunctionComponent = () => {
    return(
        <Scrollbars style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
            <HeaderBar/>

            <FullViewportSection clear="header">
                <HomePageCTA/>
            </FullViewportSection>

            <FullViewportSection/>

            <FullViewportSection clear="footer"/>

            <Footer/>
        </Scrollbars>
    );
};

export default HomePage;