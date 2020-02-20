import React from 'react';
import FinancialCard from '../ClassComponents/FinancialCard';
import TransactionLogCard from '../ClassComponents/TransactionLogCard';
import CCTransactionLogCard from '../ClassComponents/CCTransactionLogCard';
import InteractionsCard from '../ClassComponents/InteractionsCard';
import Layout from '../UILibrary/Layout';

const DashboardTab = () => (
    <>
        <Layout columns={2} className="widgets">
            <TransactionLogCard />
            <CCTransactionLogCard />
            <FinancialCard />
            <InteractionsCard />
        </Layout>
    </>
);

export default DashboardTab;
