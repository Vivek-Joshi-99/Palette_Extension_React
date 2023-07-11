import * as React from 'react';
import './App.css';
import Hyouka from './Hyouka';
import PaletteApiKey from './Components/PaletteApiKey';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Palette Virtual Cluster Wizard</h1>
        </header>
        <PaletteApiKey/>
      </div>
    );
  }
}

export default App;
