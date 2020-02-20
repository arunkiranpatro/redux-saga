import React from "react";
import PropTypes from "prop-types";

import Layout from "../UILibrary/Layout";

function FinancialRow({ data }) {
  return (
    <Layout className="widget-row" columns={4}>
      <>{data.FIName}</>
      <>{data.FIType}</>
      <>{data.CVFIStatus}</>
      <>
        xxxx-
        {data.Last4}
      </>
    </Layout>
  );
}
FinancialRow.propTypes = {
  data: PropTypes.shape({
    FIName: PropTypes.string,
    FIType: PropTypes.string,
    CVFIStatus: PropTypes.string,
    Last4: PropTypes.string
  })
};
export default FinancialRow;
