import * as React from 'react';
import { SidePanel } from './components';
import { MainPanel } from './containers';

class App extends React.Component {
  render() {
    return (
      <div>
        <SidePanel />
        <MainPanel />
      </div>
    );
  }
}

export default App;
