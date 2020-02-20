import React from 'react';
import PropTypes from 'prop-types';

const TableColumns = props => {
  const { children, ...rest } = props;
  const links = React.Children.map(children, child => React.cloneElement(child, { ...rest })
  );
  return (
    <thead>
      <tr>{links}</tr>
    </thead>
  );
};
TableColumns.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
export default TableColumns;
