import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CCTransactionLogRow from "../PureComponents/CCTransactionLogRow";
import { getCCTransactions } from "../../store/actions/ccTxnCardActions";
import WidgetCard from "../UILibrary/WidgetCard";

class CCTransactionLogCard extends Component {
  componentDidMount() {
    this.props.getCCTransactions();
  }

  render() {
    const { txns, isLoading } = this.props.cctxnsCard;
    return (
      <WidgetCard
        className="cc-transactions-card"
        heading="Credit Card Transactions"
        list={txns}
        isLoading={isLoading}
        component={CCTransactionLogRow}
      />
    );
  }
}

CCTransactionLogCard.propTypes = {
  cctxnsCard: PropTypes.shape({
    txns: PropTypes.array,
    isLoading: PropTypes.bool
  }),
  getCCTransactions: PropTypes.func
};

const mapStateToProps = state => ({
  cctxnsCard: state.cctxnsCard,
  errors: state.errors
});

export default connect(mapStateToProps, { getCCTransactions })(
  CCTransactionLogCard
);
