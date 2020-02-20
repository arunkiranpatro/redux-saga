import React from 'react';
import PropTypes from 'prop-types';

const TabLink = props => {
  const { id, handleClick, activeId, children } = props;
  let className = 'tab-link';
  let ariaSelected = 'false';
  if (activeId === id) {
    className += ' active-tab';
    ariaSelected = 'true';
  }
  function selectTab() {
    handleClick(id);
  }
  return (
    <li
      onClick={selectTab}
      className={className}
      role="tab"
      aria-selected={ariaSelected}
      tabIndex="0"
    >
      {children}
    </li>
  );
};
TabLink.propTypes = {
  activeId: PropTypes.string,
  id: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
export default TabLink;
