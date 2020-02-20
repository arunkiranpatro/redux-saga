import React, { Suspense } from "react";
import { Provider } from "react-redux";
import store from "./store/index";
import Tabs from "./components/UILibrary/Tabs";
import Tab from "./components/UILibrary/Tab";
import TabLinks from "./components/UILibrary/TabLinks";
import TabLink from "./components/UILibrary/TabLink";
import ErrorBoundary from "./components/ClassComponents/ErrorBoundary";
import AccountDetails from "./components/ClassComponents/AccountDetails";
import Loading from "./components/UILibrary/Loading";

import "./css/index.scss";

const TransactionsTab = React.lazy(() =>
  import("./components/PureComponents/TransactionsTab")
);
const DashboardTab = React.lazy(() =>
  import("./components/PureComponents/DashboardTab")
);

const App = () => (
  <div className="container">
    <Provider store={store}>
      <ErrorBoundary>
        <AccountDetails />
        <Tabs>
          <TabLinks>
            <TabLink id="0">Dashboard</TabLink>
            <TabLink id="1">Transaction Log</TabLink>
          </TabLinks>
          <Tab id="0" name="Dashboard">
            <Suspense fallback={<Loading />}>
              <DashboardTab />
            </Suspense>
          </Tab>
          <Tab id="1" name="Transactions Log" deferLoaded>
            <Suspense fallback={<Loading />}>
              <TransactionsTab />
            </Suspense>
          </Tab>
        </Tabs>
      </ErrorBoundary>
    </Provider>
  </div>
);

export default App;
