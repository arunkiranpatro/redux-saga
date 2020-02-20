import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  let className = 'tab-body';
  let body = '';
  let renderBody = false;
  const { activeId, id, deferLoaded = false } = props;
  const children = React.Children.map(props.children, child => React.cloneElement(child, {})
  );
  if (activeId === id) {
    className += ' tab-active';
    renderBody = true;
  }
  if (deferLoaded) {
    renderBody && (body = children);
  } else {
    body = children;
  }

  return <div className={className}>{body}</div>;
};

Tab.propTypes = {
  activeId: PropTypes.string,
  id: PropTypes.string.isRequired,
  deferLoaded: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
export default Tab;
