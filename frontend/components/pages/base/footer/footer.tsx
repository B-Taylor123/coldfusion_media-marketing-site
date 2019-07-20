import React, { FC } from 'react';
import styled from 'styled-components';

// import Icon from '../../../ui/icon';

const CURRENT_YEAR = new Date().getFullYear();

const Footer: FC = () => (
    <StyledFooter>
        <SocialIcons>
            {/* <Icon scale="1x"/>
            <Icon scale="1x"/>
            <Icon scale="1x"/> */}
        </SocialIcons>

        <div>
            &copy; { CURRENT_YEAR } Coldfusion Media
        </div>
    </StyledFooter>
);

const StyledFooter = styled.footer`
    height: var(--footer-height);
    width: 100%;
    padding-left: 2%;
    padding-right: 2%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: var(--secondary-bg-colour);
    color: var(--font-colour-dark);
    font-size: var(--font-size-s);
`;

const SocialIcons =  styled.div`
    width: 150px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export default Footer;