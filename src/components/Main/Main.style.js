import styled from 'styled-components';

export const StyledTabbar = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    overflow-x: scroll;
    overflow-y: hidden;
    height: 100%;
    scroll-snap-align: center;

    &::-webkit-scrollbar { 
        display: none;
    }

    & .tab-indicator {
        position: absolute;
        bottom: 0px;
        left: 0;
        height: 3px;
        background-color: var(--primary, #2196F3);
        border-radius: 4px 4px 0 0;
        opacity: 0; 
        transition: .3s;
        z-index: 1;
        overflow: auto
    }

    &:has(button.active) .tab-indicator {
        width: 100%;
        opacity: 1;
    }
`