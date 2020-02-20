import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FinancialRow from "../PureComponents/FinancialRow";
import { getFinancials } from "../../store/actions/financialCardActions";
import WidgetCard from "../UILibrary/WidgetCard";

class FinancialCard extends Component {
  componentDidMount() {
    this.props.getFinancials();
  }

  render() {
    const { financials, isLoading } = this.props.financeCard;
    return (
      <WidgetCard
        className="finance-card"
        heading="Funding Instruments"
        list={financials}
        isLoading={isLoading}
        component={FinancialRow}
      />
    );
  }
}
FinancialCard.propTypes = {
  financeCard: PropTypes.shape({
    financials: PropTypes.array,
    isLoading: PropTypes.bool
  }),
  getFinancials: PropTypes.func
};

const mapStateToProps = state => ({
  financeCard: state.financeCard,
  errors: state.errors
});

export default connect(mapStateToProps, { getFinancials })(FinancialCard);
