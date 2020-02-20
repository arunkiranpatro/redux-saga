import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Tabs(props) {
  const defaultActive = props.defaultActive || '0';
  const [activeId, setActiveId] = useState(defaultActive);
  function handleClick(id) {
    setActiveId(id);
  }
  const children = React.Children.map(props.children, child => React.cloneElement(child, {
    activeId,
    handleClick,
  })
  );

  return <div className="tab-container">{children}</div>;
}

Tabs.propTypes = {
  defaultActive: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
export default Tabs;
