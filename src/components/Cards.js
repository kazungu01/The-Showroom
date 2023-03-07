import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  const [vehicles, setVehicles] = React.useState([])
  
  React.useEffect(() => {
    fetch("http://localhost:9292/vehicles")
      .then((r) => r.json())
      .then((vehicles) => setVehicles(vehicles));
  }, []);

  return (
    <div className='cards'>
      <h1 className='hCard'>Check out some of our cars.</h1>
      <CardItem vehicles={vehicles} setVehicles={setVehicles} />
    </div>
  );
}

export default Cards;
