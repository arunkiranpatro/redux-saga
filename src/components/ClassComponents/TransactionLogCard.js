import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TransactionLogRow from "../PureComponents/TransactionLogRow";
import { getTransactions } from "../../store/actions/txnCardActions";
import WidgetCard from "../UILibrary/WidgetCard";

class TransactionLogCard extends Component {
  componentDidMount() {
    this.props.getTransactions();
  }

  render() {
    const { txns, isLoading } = this.props.txncard;
    return (
      <WidgetCard
        className="transaction-card"
        heading="Transactions"
        list={txns}
        isLoading={isLoading}
        component={TransactionLogRow}
      />
    );
  }
}
TransactionLogCard.propTypes = {
  txncard: PropTypes.shape({
    txns: PropTypes.array,
    isLoading: PropTypes.bool
  }),
  getTransactions: PropTypes.func
};

const mapStateToProps = state => ({
  txncard: state.txncard,
  errors: state.errors
});

export default connect(mapStateToProps, { getTransactions })(
  TransactionLogCard
);
