import React from 'react';
import './App.scss';
import FormContainer from './containers/FormContainer'

function App() {
  return (
    <div className="App">
      <h1>Поиск пути</h1>
      <div>
        <FormContainer />
      </div>
    </div>
  );
}

export default App;
