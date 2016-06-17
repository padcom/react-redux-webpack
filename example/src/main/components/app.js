import React from 'react';

import { Link } from 'react-router';

const App = ({ children }) => (
  <div class="app">
    <Link to="/title">Show title</Link> | <Link to="/">Hide title</Link>
    {children}
  </div>
);

export default App;
