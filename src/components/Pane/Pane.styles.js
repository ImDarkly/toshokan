import styled from 'styled-components';

export const StyledPane = styled.li`
    display: flex;
    max-width: 100%;
    min-height: 3rem;
    flex: 1;
    align-items: flex-start;
    align-self: stretch;
    flex-direction: column;
    flex-shrink: 0;
    border-radius: 0.25rem;
    overflow: hidden;

    & .header {
        display: flex;
        align-items: center;
        align-self: stretch;
        gap: 0.625rem;
        flex: 1 0 0;
        max-width: 100%;
        height: 3rem;
        padding: 0.75rem 0rem;
        border: none;
        background: transparent;
        outline: none;
        background: var(--100-secondary, #E0E5EA);  
        transition: 
            background 200ms ease-in-out,
            height 200ms ease-in-out;

        &:hover {
            cursor: pointer;
            background: var(--100-secondary, #E0E5EA);
        }

        @media (hover:hover) {
            &:hover {
                background: var(--100-primary, #CEE8FC);
            }
        }

        &:active {
            background: var(--100-primary, #CEE8FC);
        }

        &.expanded {
            height: 4rem;
        }

        & .title {
            display: inline-block;
            vertical-align: baseline; 
            text-align: left;
            padding: 0rem 1rem;
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
            width: 100%;
            line-height: 1.25rem;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            color: var(--900-primary, #021C30);
        }

        &:hover .title {
            color: var(--900-primary, #021C30);
        }

        &:active .title {
            color: var(--700-primary, #075491);
        }

        @media (hover:hover) {
            &:hover .title {
                color: var(--700-primary, #075491);
            }
        }

        & .icon {
            display: flex;
            min-width: 3rem;
            min-height: 3rem;
            justify-content: center;
            align-items: center;
            gap: 0.625rem;
            transition: rotate 300ms ease-in-out;

            &.expanded {
                rotate: -180deg;
            }

            & svg {
                fill: var(--primary, #2196F3);
            }
        }
    }

    & .details {
        transition: all 300ms ease-in-out;
        background: var(--100-secondary, #E0E5EA);
        width: 100%;
    }

    & .details ul {
        padding: 1rem;
    }

    &.collapsed .details {
        clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
        max-height: 0rem;
    }

    &.expanded .details {
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
        max-height: 32rem;
    }
`;