import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroesSection';
import DealsOfTheMonth from './components/DealsOfTheMonth';


function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      
      <DealsOfTheMonth />
      
    </div>
  );
}

export default App;
