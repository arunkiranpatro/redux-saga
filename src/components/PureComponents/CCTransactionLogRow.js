import React from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";
import Layout from "../UILibrary/Layout";

function CCTransactionLogRow({ data }) {
  return (
    <Layout className="widget-row" columns={4}>
      <Moment format="DD-MM-YYYY hh:mm a">{data.TransAuthDate}</Moment>
      <>{`xxxx-${data.FIDetails.IssueNumber}`}</>
      <>{data.ActionDetails}</>
      <>{data.FIDetails.Currency}</>
    </Layout>
  );
}
CCTransactionLogRow.propTypes = {
  data: PropTypes.shape({
    TransAuthDate: PropTypes.string,
    FIDetails: PropTypes.shape({
      IssueNumber: PropTypes.string,
      Currency: PropTypes.string
    }),
    ActionDetails: PropTypes.string
  })
};
export default CCTransactionLogRow;
