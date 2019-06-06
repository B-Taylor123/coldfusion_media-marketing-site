import * as React from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

interface IFullViewportSectionProps {
    clear?: 'header' | 'footer';
}

const FullViewportSection: FunctionComponent<IFullViewportSectionProps> = props => {
    if (props.clear === 'header') return( <ClearHeaderViewportSection> { props.children } </ClearHeaderViewportSection> );

    if (props.clear === 'footer') return( <ClearFooterViewportSection> { props.children } </ClearFooterViewportSection> );

    return( <ViewportSection> { props.children } </ViewportSection> );
};

const ViewportSection = styled.section`
    width: 100%;
    height: 100vh;
    scroll-snap-align: start;
`;

const ClearHeaderViewportSection = styled(ViewportSection)`
    height: calc(100vh - var(--header-bar-height));
`;

const ClearFooterViewportSection = styled(ViewportSection)`
    height: calc(100vh - var(--footer-height));
`;

export default FullViewportSection