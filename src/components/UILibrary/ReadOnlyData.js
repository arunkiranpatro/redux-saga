import React from 'react';
import { FaCopy } from 'react-icons/fa';
import PropTypes from 'prop-types';
import copyToClipboard from '../utils/CopyToClipboard';

function ReadOnlyData(props) {
    const { label, value, ccicon = false, children, className = '' } = props;
    let body;
    if (children) {
        body = children;
    } else if (value && value !== '') {
        body = <span className="field-value">{value}</span>;
    }
    return (
      <div className={className}>
        {label && label !== '' && (
        <label>
          {label}
          {'   '}
        </label>
            )}
        {body}
        {ccicon && (
        <button
          className="cc-icon"
          aria-label="show all"
          onClick={copyToClipboard}
        >
          <FaCopy />
        </button>
            )}
      </div>
    );
}
ReadOnlyData.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    ccicon: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};
export default ReadOnlyData;
