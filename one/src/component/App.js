import React , { Fragment } from 'react';
import '../assets/css/style.css';
import Header from './header/header';
import One from './container/one';
import Two from './container/two';
import Three from './container/three';
import Four from './container/four';
import Footer from './footer/footer';

function App() {
    return (
      <div>
        <Header />
          <Fragment>
            <One />
            <Two />
            <Three />
            <Four />
          </Fragment>
        <Footer />
      </div>
      );
};

export default App;
