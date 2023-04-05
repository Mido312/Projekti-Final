import React from 'react'
import Destinations from './components/destinations/Destinations'
import Footer from './components/footer/Footer';
import Main from './components/main/Main'
import Navbar from './components/navbar/Navbar'
import Selects from './components/selects/Selects';
import Booking from './components/booking/Booking'

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Booking />
      <Destinations />
      <Selects />
      <Footer />
    </div>
  );
}

export default App;
