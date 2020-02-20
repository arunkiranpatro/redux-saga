import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import Details from "../UILibrary/ReadOnlyData";
import Layout from "../UILibrary/Layout";
import { getAccountDetails } from "../../store/actions/accountActions";

class LatestAccountSnapshot extends React.Component {
  componentDidMount() {
    this.props.getAccountDetails();
  }

  render() {
    const { account } = this.props.accountCard;
    let body = "No results found";
    if (account) {
      body = (
        <Layout columns={4} className="snapshot">
          <Details label="Last Transaction" className="snapshot-card">
            <div>{account.LastTransactionAmount}</div>
          </Details>
          <Details label="Opportunity" className="snapshot-card">
            <div>{account.Opportunity}</div>
          </Details>
          <Details label="Potential Call Reason" className="snapshot-card">
            <div>{account.PCR}</div>
          </Details>
          <Details label="Last Login" className="snapshot-card">
            <div>
              <Moment format="DD-MM-YYYY hh:mm a">{account.LastLogin}</Moment>
            </div>
          </Details>
        </Layout>
      );
    } else {
      return null;
    }
    return <>{body}</>;
  }
}

LatestAccountSnapshot.propTypes = {
  accountCard: PropTypes.shape({
    account: PropTypes.any,
    isLoading: PropTypes.bool
  }),
  getAccountDetails: PropTypes.func
};

const mapStateToProps = state => ({
  accountCard: state.accountCard,
  errors: state.errors
});

export default connect(mapStateToProps, { getAccountDetails })(
  LatestAccountSnapshot
);
