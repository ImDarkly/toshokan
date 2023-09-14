import styled from 'styled-components';

export const StyledTab = styled.div`
    display: flex;
    position: relative;
    padding: 0rem 2.25rem;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

        & button {
            position: relative;
            color: var(--slate-400, #94A3B8);
            display: flex;
            height: 3rem;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
            justify-content: center;
            transition: .3s;

            &:hover {
                color: var(--slate-500, #64748B);
            }

            &.active {
                color: var(--primary, #2196F3);
            }

            &:before {
                content: "";
                position: absolute;
                bottom: -3px;
                left: 0;
                width: 100%;
                height: 3px;
                background-color: var(--slate-400, #94A3B8);
                border-radius: 4px 4px 0 0;
                opacity: 0; 
                transition: .3s;
            }

            &:hover:before {
                bottom: 0px;
                opacity: 1; 
            }
        }
`