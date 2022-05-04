import React from 'react';
import ReactDOM from 'react-dom';
import MainProviderComponent from './App';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainProviderComponent/>, div);
});