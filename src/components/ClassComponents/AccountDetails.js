import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loading from '../UILibrary/Loading';
import Details from '../UILibrary/ReadOnlyData';
import PhoneList from '../PureComponents/PhoneList';
import Layout from '../UILibrary/Layout';
import { getAccountInfo } from '../../store/actions/accountActions';
import togglePhone from '../utils/togglePhone';

class AccountDetails extends React.Component {
    componentDidMount() {
        this.props.getAccountInfo('1484801092820019308');
    }

    render() {
        const { account, isLoading } = this.props.accountCard;
        let body = 'No results found';
        if (isLoading) {
            body = <Loading />;
        } else if (account) {
            body = (
                <Layout columns={3} className="interaction-header">
                    <div>
                        <h2
                            aria-label="customer name"
                            className="customer-name"
                        >
                            {account.AccountName}
                        </h2>
                        <Details
                            label="Account Number: "
                            value={account.AccountNumber}
                            ccicon={true}
                        />
                        <Details label="Primary Email: " ccicon={true}>
                            {account.PrimaryEmail}
                        </Details>
                        <PhoneList
                            ActivePhones={account.ActivePhones}
                            togglePhone={togglePhone}
                        />
                    </div>
                    <div>
                        <h2 aria-label="account balance snapshot">
                            Account Balance Snapshot
                        </h2>
                        <Details
                            label="Available Balance: "
                            value={account.AvailBalance}
                        />
                        <Details
                            label="Primary Balance:"
                            value={account.TotalBalInPrimary}
                        />
                        <Details
                            label="Customer Lifetime Value: "
                            value={account.CLV}
                        />
                    </div>
                    <div>
                        <h2 aria-label="interaction details">
                            Interaction Details
                        </h2>
                        <Details
                            label="Step Up: "
                            className="validation-status"
                        >
                            {account.StepUpStatus ? 'Verified' : 'Not Verfied'}
                        </Details>
                        <Details
                            label="Last Interaction: "
                            value={account.LastInteraction}
                        />
                        <Details
                            label="Customer Segment: "
                            value={account.MerchantCategory}
                        />
                    </div>
                </Layout>
            );
        } else {
            body = 'No results';
        }
        return <>{body}</>;
    }
}

AccountDetails.propTypes = {
    accountCard: PropTypes.shape({
        account: PropTypes.any,
        isLoading: PropTypes.bool,
    }),
    getAccountInfo: PropTypes.func,
};

const mapStateToProps = state => ({
    accountCard: state.accountCard,
    errors: state.errors,
});

export default connect(mapStateToProps, { getAccountInfo })(AccountDetails);
