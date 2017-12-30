import * as React from 'react';
import { About, ProjectsFilter } from './components';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <About />
        <ProjectsFilter />
      </div>
    );
  }
}

export default App;
