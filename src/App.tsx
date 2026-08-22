import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AppGrid from './components/AppGrid';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <AppGrid />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
