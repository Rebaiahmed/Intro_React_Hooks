import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './ButtonComponent'
import DataLoader from './fetchdataComponent';
import DataLoaderHook from './fetchDataHooks';

import DataLoader2 from './Dataloader2';

function App() {
  return (
    <div className="App">
      <Button/>
      {/*<DataLoaderHook />*/}
      <DataLoader2 />
    </div>
  );
}


export default App;
