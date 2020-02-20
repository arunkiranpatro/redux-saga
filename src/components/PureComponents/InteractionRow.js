import React from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";
import Layout from "../UILibrary/Layout";

function InteractionRow({ data }) {
  return (
    <Layout className="widget-row" columns={4}>
      <Moment format="DD-MM-YYYY hh:mm a">{data.CreateDateTime}</Moment>
      <>{data.WorkStatus}</>
      <>{data.ContactChannel}</>
      <>{data.OwnerID}</>
    </Layout>
  );
}
InteractionRow.propTypes = {
  data: PropTypes.shape({
    CreateDateTime: PropTypes.string,
    WorkStatus: PropTypes.string,
    ContactChannel: PropTypes.string,
    OwnerID: PropTypes.string
  })
};
export default InteractionRow;
