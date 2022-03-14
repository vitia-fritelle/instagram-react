import React from 'react';
import Header from './Components/Header/Header';
import Stories from './Components/Stories/Stories';
import Main from './Components/Main/Main';
import Aside from './Components/Aside/Aside';
import Nav from './Components/Nav/Nav';
import driven from './assets/images/driven.jpg'

function App() {
  return (
    <div className="App">
      <Header/>
      <Stories/>
      <Main/>
      <Aside user='Driven' src={driven} instagram='driveneducacao'/>
      <Nav/>
    </div>
  );
}

export default App;
