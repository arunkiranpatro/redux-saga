import React, { Suspense } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Loading from "../UILibrary/Loading";
import Table from "../UILibrary/Table";
import TableColumn from "../UILibrary/TableColumn";
import TableRows from "../UILibrary/TableRows";
import TableRow from "../UILibrary/TableRow";

import { getTxnslist } from "../../store/actions/txnsListActions";
import TableColumns from "../UILibrary/TableColumns";

const Moment = React.lazy(() => import("react-moment"));

class TransactionsList extends React.Component {
  constructor(props) {
    super(props);
    this.renderTablebody = this.renderTablebody.bind(this);
    this.renderTableHeader = this.renderTableHeader.bind(this);
  }
  componentDidMount() {
    this.props.getTxnslist();
  }

  renderTablebody(txns) {
    const childBody = txns.map((result, index) => (
      <TableRows key={index}>
        <TableRow>
          <Suspense fallback={<Loading />}>
            <Moment format="DD-MM-YYYY hh:mm a">
              {result.TransactionDate}
            </Moment>
          </Suspense>
        </TableRow>
        <TableRow>{result.TransactionID}</TableRow>
        <TableRow>{result.TransactionType}</TableRow>
        <TableRow>{result.CounterpartyEmail}</TableRow>
        <TableRow>{result.NetAmount.AmountCurrency}</TableRow>
        <TableRow>{result.TransLogBalanceCurrency}</TableRow>
      </TableRows>
    ));
    return childBody;
  }

  renderTableHeader(props) {
    return (
      <TableColumns {...props}>
        <TableColumn id="TransactionDate" sortable>
          Transaction Date
        </TableColumn>
        <TableColumn id="TransactionID" sortable>
          Transaction ID
        </TableColumn>
        <TableColumn id="TransactionType" sortable>
          Transaction Type
        </TableColumn>
        <TableColumn id="CounterpartyEmail">Counter Party Email</TableColumn>
        <TableColumn id="NetAmount.Amount" sortable>
          Net Amount
        </TableColumn>
        <TableColumn id="TransLogBalanceCurrency">Net Balance</TableColumn>
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

export default connect(mapStateToProps, { getTxnslist })(TransactionsList);
