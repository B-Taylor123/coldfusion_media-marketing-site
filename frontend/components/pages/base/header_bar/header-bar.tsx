import * as React from 'react';
import { FunctionComponent } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const HeaderBar: FunctionComponent = () => {
    return(
        <Header>
            <span> ColdFusion Media </span>

            <HeaderMenu>
                <Link href="/work">
                    <HeaderMenuItem> Work </HeaderMenuItem>
                </Link>
                <Link href="/about">
                    <HeaderMenuItem> About </HeaderMenuItem>
                </Link>
            </HeaderMenu>
        </Header>
    );
};

const Header = styled.div`
    width: 100%;
    height: var(--header-bar-height);
    font-size: var(--font-size-m);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 2.5%;
    padding-right: 2.5%;
    scroll-snap-align: start;
`;

const HeaderMenu = styled.nav`
    width: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const HeaderMenuItem = styled.a`
    text-decoration: none;
    color: var(--font-colour);
`;

export default HeaderBar;