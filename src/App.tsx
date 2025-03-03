import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Expertise from './components/Expertise';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {isLoading ? (
        <div className="loader-container">
          <div className="loader"></div>
          <h2 className="loading-text">Aditya Software Solutions</h2>
        </div>
      ) : (
        <>
          <Header />
          <main>
            <Hero />
            <Services />
            <Expertise />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;