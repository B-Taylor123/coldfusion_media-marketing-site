import * as React from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

import ContactForm from './contact_form';

const HomePageContact: FunctionComponent = () => (
    <HomePageContactWrapper>
        <ContactForm/>
    </HomePageContactWrapper>
);

const HomePageContactWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default HomePageContact;