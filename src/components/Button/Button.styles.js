import styled from 'styled-components';

export const StyledButton = styled.button` 
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border-radius: 1.5rem;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem; /* 125% */
  transition:
    scale 100ms ease-in-out,
    background 100ms ease-in-out,
    outline 100ms ease-in-out
  ;
  border: transparent;
  padding: ${props => props.type === 
    "text" ? 
    "0.75rem 0.875rem" : 
    "0.75rem 1.75rem"};
  background: ${props => props.type === 
    "solid" ? 
    props.secondary ? 
      "var(--secondary, #A3B2BF)" : 
      "var(--primary, #2196F3)" :
    "transparent"};
  color: ${props => props.type === 
    "solid" ?
    props.secondary ? 
      "var(--100-secondary, #E0E5EA)" : 
      "var(--100-primary, #CEE8FC)" :
    props.secondary ? 
      "var(--secondary, #A3B2BF)" : 
      "var(--primary, #2196F3)"};
  outline: ${props => props.type === 
    "outlined" ? 
    props.secondary ?
      "1px solid var(--300-secondary, #A7B3BD)" : 
      "1px solid var(--300-primary, #6DBAF7);" : 
    "transparent"};

  &:disabled {
    background: ${props => props.type === 
      "solid" ? 
      "var(--100-secondary, #E0E5EA)" : 
      "transparent"};
    color: ${props => props.type === 
      "solid" ?
      "var(--200-secondary, #C2CCD5)" :
      "var(--100-secondary, #E0E5EA)"};
    outline: ${props => props.type === 
      "outlined" ? 
      "1px solid var(--100-secondary, #E0E5EA);" : 
      "transparent"};
  }

  &:hover:not(:disabled) {
    cursor: pointer;
    background: ${props => props.type === 
      "solid" ? 
      props.secondary ?
        "var(--secondary, #A3B2BF)" : 
        "var(--primary, #2196F3)" : 
      "transparent"};
    color: ${props => props.type === 
      "solid" ?
      props.secondary ?
        "var(--100-secondary, #E0E5EA)" : 
        "var(--100-primary, #CEE8FC)" :
      props.secondary ?
        "var(--secondary, #A3B2BF)" : 
        "var(--primary, #2196F3)"};
    outline: ${props => props.type === 
      "outlined" ? 
      props.secondary ? 
        "1px solid var(--300-secondary, #A7B3BD)" : 
        "1px solid var(--300-primary, #6DBAF7)" : 
      "transparent"};
  }

  @media (hover:hover) {
    &:hover:not(:disabled) {
      background: ${props => props.type === 
        "solid" ? 
        props.secondary ?
          "var(--200-secondary, #C2CCD5)" : 
          "var(--300-primary, #6DBAF7)" : 
        props.secondary ?
          "var(--100-secondary, #E0E5EA)" :
          "var(--100-primary, #CEE8FC)"};
      color: ${props => props.type === 
        "solid" ?
        props.secondary ?
          "var(--100-secondary, #E0E5EA)" :
          "var(--200-primary, #9ED1F9)" :
        props.secondary ?
          "var(--400-secondary, #8A9AA7)" :
          "var(--400-primary, #3DA3F4)"};
      outline: ${props => props.type === 
        "outlined" ? 
        props.secondary ?
          "1px solid var(--100-secondary, #E0E5EA);" : 
          "1px solid var(--100-primary, #CEE8FC);" : 
        "transparent"};
    }
  }

  &:active:not(:disabled){
    scale: 0.95;
    outline: ${props => props.type === 
      "outlined" ? 
      props.secondary ?
        "1px solid var(--100-secondary, #E0E5EA);" : 
        "1px solid var(--100-primary, #CEE8FC);" : 
      "transparent"};
    background: ${props => props.type === 
      "solid" ? 
      props.secondary ?
        "var(--200-secondary, #C2CCD5)" : 
        "var(--300-primary, #6DBAF7)" : 
      props.secondary ?
        "var(--100-secondary, #E0E5EA)" :
        "var(--100-primary, #CEE8FC)"};
    color: ${props => props.type === 
      "solid" ?
      props.secondary ?
        "var(--100-secondary, #E0E5EA)" :
        "var(--200-primary, #9ED1F9)" :
      props.secondary ?
        "var(--400-secondary, #8A9AA7)" :
        "var(--400-primary, #3DA3F4)"};
  }

  &:disabled:hover {
    cursor: not-allowed;
  }
`;