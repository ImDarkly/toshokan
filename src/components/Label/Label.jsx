import { StyledLabel } from "./Label.styles"

const Label = ({ label = "Label"}) => {
    return (
        <StyledLabel className="label">
            <p>{ label }</p>
        </StyledLabel>
    )
}

export default Label;