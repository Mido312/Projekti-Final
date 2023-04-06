import React from 'react'
import Destinations from './components/destinations/Destinations'
import Footer from './components/footer/Footer';
import Main from './components/main/Main'
import Navbar from './components/navbar/Navbar'
import Selects from './components/selects/Selects';
import Booking from './components/booking/Booking'
import Card from './components/cards/Card'
import data from './components/cards/data'
import AboutUs from './components/aboutus/aboutus';

function App() {
  const cards = data.map((card) => {
    return <Card key={card.id} card={card} />;
  });
  return (
    <div>
      <Navbar />
      <Main />
      <Selects />
      <section className="cards-container">{cards}</section>
      <Booking />
      <Destinations />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
