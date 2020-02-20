import React from 'react';
import PropTypes from 'prop-types';

const TableRow = props => {
  const { children } = props;
  return <td className="table-details">{children}</td>;
};
TableRow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
export default TableRow;
