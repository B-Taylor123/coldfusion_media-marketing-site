import React, { FC } from 'react';
import styled from 'styled-components';

const StyledH2: FC = props => <H2>{ props.children }</H2>;

const H2 = styled.h2`
    width: 100%;
    text-align: center;
    font-size: var(--font-size-l);
`;

export default StyledH2;