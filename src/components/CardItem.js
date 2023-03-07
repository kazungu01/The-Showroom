import React from 'react';
import Cards from './Cards';
import VehicleCard from './VehicleCard';
import { Link } from 'react-router-dom';

function CardItem({vehicles, setVehicles}) {
  const allVehicles = vehicles.map((vehicle) => {
    return <VehicleCard key={vehicle.id} vehicle={vehicle} setVehicles={setVehicles} vehicles={vehicles} />
  })
  return (
    <ul className='Items'>
        {allVehicles}
    </ul>
  );
}

export default CardItem;
