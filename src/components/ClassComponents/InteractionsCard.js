import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import InteractionRow from "../PureComponents/InteractionRow";
import { getInteractions } from "../../store/actions/interactionsActions";
import WidgetCard from "../UILibrary/WidgetCard";

class InteractionsCard extends Component {
  componentDidMount() {
    this.props.getInteractions();
  }

  render() {
    const { interactions, isLoading } = this.props.icasesCard;
    return (
      <WidgetCard
        className="interactions-card"
        heading="Interactions"
        list={interactions}
        isLoading={isLoading}
        component={InteractionRow}
      />
    );
  }
}

InteractionsCard.propTypes = {
  icasesCard: PropTypes.shape({
    interactions: PropTypes.array,
    isLoading: PropTypes.bool
  }),
  getInteractions: PropTypes.func
};

const mapStateToProps = state => ({
  icasesCard: state.icasesCard,
  errors: state.errors
});

export default connect(mapStateToProps, { getInteractions })(InteractionsCard);
