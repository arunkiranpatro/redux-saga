import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import Tabs from './components/UILibrary/Tabs';
import Tab from './components/UILibrary/Tab';
import TabLinks from './components/UILibrary/TabLinks';
import TabLink from './components/UILibrary/TabLink';
import SingleDynamicContainer from './components/UILibrary/SingleDynamicContainer';
import ErrorBoundary from './components/ErrorBoundary';
import SampleTable from './components/SampleTable';

import './css/index.scss';

function lazyComponent() {
  let SampleComponent = React.lazy(() => import('./components/SampleComponent')
  );
  SampleComponent = React.createElement(SampleComponent);
  SingleDynamicContainer.loadComponent(SampleComponent);
}
const App = () => (
  <div className="container">
    <Provider store={store}>
      <ErrorBoundary>
        <Tabs>
          <TabLinks>
            <TabLink id="0">Tab-1</TabLink>
            <TabLink id="1">Tab-2</TabLink>
          </TabLinks>
          <Tab id="0" name="Tab-1">
            <a onClick={lazyComponent}>Test Dynamic container</a>
            <SingleDynamicContainer initial={<SampleTable />} />
          </Tab>
          <Tab id="1" name="Tab-2">
            <h2>Welcome to Tab 2</h2>
          </Tab>
        </Tabs>
      </ErrorBoundary>
    </Provider>
  </div>
);

export default App;
