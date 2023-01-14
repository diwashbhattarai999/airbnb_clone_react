import './css/App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import CardData from './data';

const cards = CardData.map(item =>{
  return (
    <Card 
      key = {item.id}
      item = {item}
      // {...item} //Spread syntax can also be used to get the data
    />
  )
});

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="container card-container">
        {cards}
      </div>
    </div>
  );
}

export default App;

/* <Card 
  img = {card1}
  stock = "SOLD OUT"
  rating = {5.0}
  reviewCount = {6}
  location = "USA"
  title = "Life Lessons with katie Zaferes"
  price = {136}
/>
<Card 
  img = {card2}
  stock = "SOLD OUT"
  rating = {5.0}
  reviewCount = {6}
  location = "USA"
  title = "Life Lessons with katie Zaferes"
  price = {136}
/>
<Card 
  img = {card3}
  stock = "SOLD OUT"
  rating = {5.0}
  reviewCount = {6}
  location = "USA"
  title = "Life Lessons with katie Zaferes"
  price = {136}
/> */