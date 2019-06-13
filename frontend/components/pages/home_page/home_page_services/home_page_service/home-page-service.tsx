import * as React from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

import Icon from '../../../../ui/icon';

interface IHomePageServiceProps {
    title: string;
    shortBody: string;
}

const HomePageService: FunctionComponent<IHomePageServiceProps> = props => (
    <HomePageServiceWrapper>
        <HomePageServiceHeading>
            <Icon scale="x2"/>

            <h3>{ props.title }</h3>
        </HomePageServiceHeading>

        <p>{ props.shortBody }</p>
    </HomePageServiceWrapper>
);

const HomePageServiceWrapper = styled.div`
    width: 20%;
    height: 50%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: 1px solid white;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 8px;
    color: white;
    font-size: var(--font-size-s);
`;

const HomePageServiceHeading = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-size: var(--font-size-m);
    h3 {
        text-align: center
    }
`;

export default HomePageService;