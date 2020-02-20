import React from 'react';
import PropTypes from 'prop-types';

function Layout(props) {
    let { className, columns } = props;
    let mainBody = [];
    let rows = [];
    let tempColumnName;
    let rowNum = 1;
    const myChildren = React.Children.toArray(props.children);
    className = className || '';
    const containerClassName = `row-col-container ${className}`;
    columns = Number.parseInt(columns, 10);
    if (myChildren.length <= 0) {
        return null;
    }
    mainBody = [];
    rows = [];
    tempColumnName = `${12 / columns}`;
    rowNum = 1;
    for (let i = 1; i <= myChildren.length; i++) {
        let columnClassName = `column-${tempColumnName} ${className}-column-`;
        let rowClassName = `${'row' + ' '}${className}-row-`;
        columnClassName += i;

        /* push all columns for each row */
        rows.push(
          <div className={columnClassName} key={columnClassName}>
            {myChildren[i - 1]}
          </div>
        );
        /** suppose children =5 and columns=2  */
        if (i % columns === 0 || i === myChildren.length) {
            rowClassName += rowNum;
            mainBody.push(
              <div className={rowClassName} key={`row${i}`}>
                {rows}
              </div>
            );
            rowNum++;
            rows = [];
        }
    }
    return <div className={containerClassName}>{mainBody}</div>;
}

Layout.propTypes = {
    className: PropTypes.string,
    columns: PropTypes.number,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

export default Layout;
