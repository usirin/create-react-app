import React from 'react';
import App from './App';
import Pkg from '../package.json';

export default {
  name: Pkg.name,
  setup: ({ render }) => {
    render(<App />);
  },
};
