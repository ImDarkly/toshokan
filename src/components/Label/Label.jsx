import { StyledLabel } from "./Label.styles"

const Pane = ({ label = "Label"}) => {
    return (
        <StyledLabel>
            <p>{ label }</p>
        </StyledLabel>
    )
}

export default Pane;