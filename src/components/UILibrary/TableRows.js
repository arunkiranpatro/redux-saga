import React from 'react';
import PropTypes from 'prop-types';

const TableRows = props => {
  const { children } = props;
  const links = React.Children.map(children, child => React.cloneElement(child, {})
  );

  return <tr>{links}</tr>;
};
TableRows.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
export default TableRows;
