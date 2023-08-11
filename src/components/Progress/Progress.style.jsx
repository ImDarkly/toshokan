import styled from 'styled-components';

export const StyledProgress = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.25rem 0rem;
    gap: 0.5rem;
    justify-content: center;
    align-items: flex-start;
    background: #E0E5EA;

    & .label {
        align-self: stretch;
        color: var(--600-secondary, #536778);
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
    }

    & .amount {
        display: flex;
        padding: 0.25rem 0rem;
        align-items: center;
        gap: 0.5rem;
        align-self: stretch;

        & .progress-bar {
            display: flex;
            padding: 0.1875rem 0rem;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 0.625rem;
            flex: 1 0 0;

            & .bar {
                display: flex;
                height: 0.25rem;
                padding-right: 0px;
                align-items: center;
                align-self: stretch;
                background: var(--200-primary, #9ED1F9);
                border-radius: 0.25rem;
                overflow: hidden;

                & .indicator {
                    display: flex;
                    height: 0.25rem;
                    width: 100%;
                    transform: translateX(calc(-100% + ${props => props.value}%));
                    align-items: flex-start;
                    gap: 0.625rem;
                    border-radius: 0.25rem;
                    background: var(--primary, #2196F3);
                    transition: transform 500ms ease-out;
                }
            }
        }

        & .quantity {
            display: flex;
            flex-direction: row;
            line-height: 130%;
            justify-content: flex-end;
            font-size: 1rem;
            
            & .required {
                color: var(--primary, #2196F3);
            }

            & .available {
                color: var(--400-secondary, #8A9AA7);
            }

            p {
                margin: 0   ;
            }
        }
    }
`