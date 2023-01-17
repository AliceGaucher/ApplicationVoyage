import logo from './logo.svg';
import './App.css';
import {Fragment} from 'react'
import VoyageListeModel from './models/VoyageListeModel';

function App() {
  return (
    <Fragment>
      <h1>Voyage MVVM</h1>
      <VoyageListeModel/>
    </Fragment>
  );
}

export default App;
