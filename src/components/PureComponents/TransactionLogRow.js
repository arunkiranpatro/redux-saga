import React from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";

import Layout from "../UILibrary/Layout";

function TransactionLogRow({ data }) {
  const txnAmtColorCls = data.GrossAmount.Amount > 0 ? "txn-green" : "txn-red";
  return (
    <Layout className="widget-row" columns={4}>
      <Moment format="DD-MM-YYYY hh:mm a">{data.TransactionDate}</Moment>
      <>{data.CounterpartyName}</>
      <>{data.Status}</>
      <div className={txnAmtColorCls}>{data.GrossAmount.AmountCurrency}</div>
    </Layout>
  );
}
TransactionLogRow.propTypes = {
  data: PropTypes.shape({
    TransactionDate: PropTypes.string,
    CounterpartyName: PropTypes.string,
    Status: PropTypes.string,
    GrossAmount: PropTypes.shape({
      AmountCurrency: PropTypes.string,
      Amount: PropTypes.string
    })
  })
};
export default TransactionLogRow;
