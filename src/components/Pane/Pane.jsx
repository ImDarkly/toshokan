import React from 'react';
import PropTypes from 'prop-types';
import { StyledPane } from './Pane.styles';
import Progress from '../Progress/Progress';

const Pane = ({ title = 'Pane', expanded, onExpand }) => {
    const progressData = [
        { value: expanded ? 25 : 0, label: 'Photopaper, A3' },
        { value: expanded ? 90 : 0, label: 'Cyan' },
        { value: expanded ? 9 : 0, label: 'Magenta' },
        { value: expanded ? 67 : 0, label: 'Yellow' },
        { value: expanded ? 100 : 0, label: 'Black' },
    ];

    return (
        <StyledPane className={expanded ? 'expanded' : 'collapsed'}>
            <button onClick={onExpand} className={expanded ? 'expanded header' : 'collapsed header'}>
                <span className='title'>{title}</span>
                <span className={expanded ? 'expanded icon' : 'collapsed icon'}>
                    <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <g mask={`url(#mask0)`}>
                            <rect width='24' height='24' fill='transparent' mask='url(#mask0)' />
                            <path
                                d='M12 15.5635C11.8667 15.5635 11.7417 15.5425 11.625 15.5005C11.5083 15.4592 11.4 15.3885 11.3 15.2885L6.675 10.6635C6.49167 10.4802 6.40433 10.2508 6.413 9.9755C6.421 9.70084 6.51667 9.47184 6.7 9.2885C6.88333 9.10517 7.11667 9.0135 7.4 9.0135C7.68333 9.0135 7.91667 9.10517 8.1 9.2885L12 13.1885L15.925 9.2635C16.1083 9.08017 16.3377 8.9925 16.613 9.0005C16.8877 9.00917 17.1167 9.10517 17.3 9.2885C17.4833 9.47184 17.575 9.70517 17.575 9.9885C17.575 10.2718 17.4833 10.5052 17.3 10.6885L12.7 15.2885C12.6 15.3885 12.4917 15.4592 12.375 15.5005C12.2583 15.5425 12.1333 15.5635 12 15.5635Z'
                            />
                        </g>
                    </svg>
                </span>
            </button>
            <div className='details'>
                <ul>
                    {progressData.map(({ value, label }) => (
                        <Progress key={label} value={value} label={label} />
                    ))}
                </ul>
            </div>
        </StyledPane>
    );
};

Pane.propTypes = {
    title: PropTypes.string,
    expanded: PropTypes.bool,
    onExpand: PropTypes.func,
};

export default Pane;
