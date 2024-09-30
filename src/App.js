import './App.css';
import Offer from './components/Offer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';

function App() {
  return (
    <div className='w-[100vw] h-[100vh]'>
      <Offer/>
      <Navbar/>
      <Hero/>
      <Brands/>
    </div>
  );
}

export default App;
