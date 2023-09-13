import React, { useState } from 'react';
import Pane from '../Pane/Pane';
import { StyledAccordion } from './Accordion.styles';
import { useSelector } from 'react-redux';
import './Accordion.css'

const Accordion = () => {
    const orders = useSelector(store => store.orders);
    const [expandedOrderId, setExpandedOrderId] = useState(null);

    const toggleExpand = (orderId) => {
        expandedOrderId === orderId ? setExpandedOrderId(null) : setExpandedOrderId(orderId);
    };

    return (
        <div className="accordion-container">
            <StyledAccordion>
                {orders.map(order => (
                    <Pane
                        key={order.id}
                        title={order.title}
                        expanded={order.id === expandedOrderId}
                        onExpand={() => toggleExpand(order.id)}
                    />
                ))}
            </StyledAccordion>
        </div>
    );
}

export default Accordion;
