import React from 'react';
// eslint-disable-next-line 
import { render } from '@testing-library/react';
import App from './App';
// eslint-disable-next-line 
import { isTSAnyKeyword } from '@babel/types';

it('renders without crashing', ()=>{
  const div = document.createElement('div');
  // eslint-disable-next-line 
  ReactDOM.render(<App />, div);
  // eslint-disable-next-line 
  ReactDOM.unmountComponentAtNode(div);
});

