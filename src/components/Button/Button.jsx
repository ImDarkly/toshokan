import { StyledButton } from './Button.styles';

const Button = ({ type = "solid", label = "Button", disabled = false, secondary = false }) => {
    return (
        <>
            <StyledButton 
                disabled = { disabled } 
                type = { type }
                secondary = { secondary }
                >
                { label }
            </StyledButton>
        </>
    );
};

export default Button;