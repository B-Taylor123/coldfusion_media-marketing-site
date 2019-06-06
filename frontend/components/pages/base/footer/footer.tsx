import * as React from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

const Footer: FunctionComponent = () => {
    return(
        <StyledFooter/>
    );
};

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

// .footer--social-icons {
//     width: 150px;
//     height: 100%;
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     align-items: center;
//     .footer--social-icon {
//         width: 40px;
//         height: 40px;
//         background-color: #C4C4C4;
//         border-radius: 1000px;
//     }
// }

export default Footer;