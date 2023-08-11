import React, { useState } from 'react';
import Pane from '../Pane/Pane';
import { StyledAccordion } from './Accordion.styles';

const Accordion = () => {
    const initialPanesState = [
    { id: 1, expanded: false, required: 1, available: 100 },
    { id: 2, expanded: false, required: 542, available: 124 },
    { id: 3, expanded: false, required: 246, available: 378 },
    { id: 4, expanded: false, required: 719, available: 103 },
    { id: 5, expanded: false, required: 352, available: 451 },
    { id: 6, expanded: false, required: 123, available: 789 },
    { id: 7, expanded: false, required: 654, available: 512 },
    { id: 8, expanded: false, required: 987, available: 236 },
    { id: 9, expanded: false, required: 456, available: 890 },
    { id: 10, expanded: false, required: 324, available: 706 },
];


    const [panes, setPanes] = useState(initialPanesState);
    const [expandedPaneId, setExpandedPaneId] = useState(null);

    const expandPane = (paneId) => {
        const updatedPanes = panes.map(pane => ({
            ...pane,
            expanded: pane.id === paneId ? !pane.expanded : false,
        }));
        setPanes(updatedPanes);
        setExpandedPaneId(paneId);
    }

    return (
        <StyledAccordion>
            {panes.map(pane => (
                <Pane
                    key={pane.id}
                    title={`Pane ${pane.id}`}
                    expanded={pane.expanded}
                    onExpand={() => expandPane(pane.id)}
                    required={pane.required}
                    available={pane.available}
                />
            ))}
        </StyledAccordion>
    );
}

export default Accordion;
