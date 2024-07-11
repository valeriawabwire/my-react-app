import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const YachtDetails = () => {
  const { id } = useParams();
  const [yacht, setYacht] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/yatchs/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setYacht(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!yacht) {
    return <div>Yacht not found</div>;
  }

  return (
    <div>
      <h1>{yacht.first_name}</h1>
      <img src={yacht.image} alt={yacht.first_name} />
      <p>{yacht.description}</p>
      <p>Price: {yacht.price}</p>
      <p>Amenities: {yacht.amenities.join(', ')}</p>
      <p>Capacity: {yacht.capacity}</p>
      <button>Book Now</button>
    </div>
  );
};
export default YachtDetails;