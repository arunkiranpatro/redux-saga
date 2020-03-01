import React, { Suspense } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Loading from "../UILibrary/Loading";
import Table from "../UILibrary/Table";
import TableColumn from "../UILibrary/TableColumn";
import TableRows from "../UILibrary/TableRows";
import TableRow from "../UILibrary/TableRow";

import { getTxnslist, getTransactions } from "../../store/actions/txnsListActions";
import TableColumns from "../UILibrary/TableColumns";

const Moment = React.lazy(() => import("react-moment"));

class TransactionsList extends React.Component {
  constructor(props) {
    super(props);
    this.renderTablebody = this.renderTablebody.bind(this);
    this.renderTableHeader = this.renderTableHeader.bind(this);
  }
  componentDidMount() {
    this.props.getTransactions('A9814450173');
  }

  renderTablebody(txns) {
    const childBody = txns.map((result, index) => (
      <TableRows key={index}>
        <TableRow>
          <Suspense fallback={<Loading />}>
            <Moment format="DD-MM-YYYY hh:mm a">
              {result.txn_date}
            </Moment>
          </Suspense>
        </TableRow>
        <TableRow>{result.txn_id}</TableRow>
        <TableRow>{result.txn_type}</TableRow>
        <TableRow>{result.cp_email}</TableRow>
        <TableRow>{result.txn_status}</TableRow>
        <TableRow>{result.txn_gross_amount}</TableRow>
      </TableRows>
    ));
    return childBody;
  }

  renderTableHeader(props) {
    return (
      <TableColumns {...props}>
        <TableColumn id="txn_date" sortable>
          Transaction Date
        </TableColumn>
        <TableColumn id="txn_id" sortable>
          Transaction ID
        </TableColumn>
        <TableColumn id="txn_type" sortable>
          Transaction Type
        </TableColumn>
        <TableColumn id="cp_email">Counter Party Email</TableColumn>
        <TableColumn id="txn_status" sortable>
          Status
        </TableColumn>
        <TableColumn id="txn_gross_amount">Net Balance</TableColumn>
      </TableColumns>
    );
  }

  render() {
    const { txns, isLoading } = this.props.txnslist;
    let body = "No results found";
    if (isLoading) {
      body = <Loading />;
    } else if (txns.length > 0) {
      body = (
        <Table
          data={txns}
          renderTableHeader={this.renderTableHeader}
          renderTableBody={this.renderTablebody}
          sortColumn="TransactionDate"
          sortDirection="desc"
        />
      );
    }
    return <>{body}</>;
  }
}
TransactionsList.propTypes = {
  txnslist: PropTypes.shape({
    txns: PropTypes.array,
    isLoading: PropTypes.bool
  }),
  getTxnslist: PropTypes.func
};

const mapStateToProps = state => ({
  txnslist: state.txnslist,
  errors: state.errors
});

export default connect(mapStateToProps, { getTxnslist, getTransactions })(TransactionsList);
