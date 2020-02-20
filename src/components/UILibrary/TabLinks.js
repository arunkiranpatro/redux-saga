import React from 'react';
import PropTypes from 'prop-types';

const TabLinks = props => {
  const { activeId, handleClick, children } = props;
  const links = React.Children.map(children, child => React.cloneElement(child, {
    activeId,
    handleClick,
  })
  );

  return (
    <ul className="tab-links" role="tablist">
      {links}
    </ul>
  );
};
TabLinks.propTypes = {
  activeId: PropTypes.string,
  handleClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
export default TabLinks;
