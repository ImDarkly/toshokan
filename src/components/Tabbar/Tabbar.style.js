import styled from 'styled-components';

export const StyledTabbar = styled.div`
    display: flex;
    position: relative;
    justify-content: space-between;
    flex-direction: row;
    height: 48px; 
    background: var(--100-secondary, #E0E5EA);
    padding: 0rem 1rem;
    align-items: center;
    overflow-x: scroll;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
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