import * as React from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

interface IHomePageServiceProps {
    title: string;
    shortBody: string;
}

const HomePageService: FunctionComponent<IHomePageServiceProps> = props => (
    <HomePageServiceWrapper>
        <h3>{ props.title }</h3>

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
    font-size: var(--font-size-m);
`;

export default HomePageService;