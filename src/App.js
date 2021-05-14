import React, { Fragment } from 'react';

import Content from './components/Content';
import Footer from './components/Footer';


const App = () => (
  <div>
    <Content />
    <div class="light-mode" id="spacer"></div>
    <Footer />
  </div>
);

export default App;
