import React from 'react';
import PropTypes from 'prop-types';
import { StyledProgress } from './Progress.style';

const Progress = ({ value = 0, label = 'Label' }) => {
    return (
        <StyledProgress value={value}>
            <div className="label">
                {label}
            </div>
            <div className="amount">
                <div className="progress-bar">
                    <span className="bar">
                        <span className="indicator"></span>
                    </span>
                </div>
                <div className="quantity">
                    <p className="required">154</p>
                    <p className="available">/235</p>
                </div>
            </div>
        </StyledProgress>
    );
};

Progress.propTypes = {
    value: PropTypes.number,
    label: PropTypes.string,
};

export default Progress;
