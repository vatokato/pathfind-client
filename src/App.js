import React from 'react';
import './App.scss';
import FormContainer from './containers/FormContainer'

function App() {
  return (
    <div className="App">
      <h1>Продолжительность маршрута</h1>
      <div className="description">
        <p>1 деление координат приравнено к 1 метру</p>
      </div>
      <div>
        <FormContainer />
      </div>
    </div>
  );
}
export default App;
