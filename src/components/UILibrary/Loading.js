import React from 'react';
import PropTypes from 'prop-types';

export default function Loading(props) {
  const children = { props };
  const body = Object.keys(children.props).length > 0
    ? typeof children.props.children === 'string'
      ? children.props.children
      : ''
    : 'Loading...';

  return (
    <div className="loading-div">{body === '' ? props.children : body}</div>
  );
}
Loading.propTypes = {
  children: PropTypes.node,
};
