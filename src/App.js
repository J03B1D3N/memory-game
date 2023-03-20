import React, { useState, useEffect } from 'react';
import "./App.scss"
import Card from './Card';

function App() {

  return (
    <div className='papaDiv'>
      <div className='header'>

      </div>
      <div className='mamaDiv'>
        {Card()}
      
        </div>
        <div className='footer'>

        </div>
    </div>
  );
}
export default App;