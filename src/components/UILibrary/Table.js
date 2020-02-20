import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ArraySort from 'array-sort';

function Table(props) {
    const {
        onSort = onSortDefault,
        renderTableHeader,
        renderTableBody,
    } = props;
    const [sortColumn, setSortColumn] = useState(props.sortColumn);
    const [sortDirection, setSortDirection] = useState(props.sortDirection);
    function onSortDefault(column) {
        let { data } = props;
        if (column === sortColumn) {
            const direction = sortDirection === 'desc' ? 'asc' : 'desc';
            const reverse = direction === 'desc';
            data = ArraySort(data, column, { reverse });
            setSortColumn(column);
            setSortDirection(direction);
        } else {
            data = ArraySort(data, column, { reverse: true });
            setSortColumn(column);
            setSortDirection('desc');
        }
    }
    const config = {
        onSort,
        sortColumn,
        sortDirection,
    };

    return (
      <table className="table-container">
        {renderTableHeader(config)}
        <tbody>{renderTableBody(props.data)}</tbody>
      </table>
    );
}

Table.propTypes = {
    sortColumn: PropTypes.string.isRequired,
    sortDirection: PropTypes.string.isRequired,
    renderTableBody: PropTypes.func.isRequired,
    renderTableHeader: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
    onSort: PropTypes.func,
};
export default Table;
