import React from 'react';
import './App.css';
import AboutUs from './AboutUs'
import Bog from './Bog'


function App() {
  return (
    <div className="container">
      <AboutUs title_section="ABOUT EIGHT SEC" introduce_section="There are many variations of passages of Lorem Ipsum available,...." />
      <Bog title_section="BLOG" introduce_section="There are many variations of passages of Lorem Ipsum available,...." />
    </div>
  )
}

export default App;
