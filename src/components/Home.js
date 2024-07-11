// import React from 'react';
// import { Link } from 'react-router-dom';

// const Home = ({ yachts }) => {
//   return (
//     <div>

//       <h1>Yachts Available</h1>
//       <div className="yacht-list">
//         {yachts.length > 0 ? (
//           yachts.map((yacht) => (
//             <div key={yacht.id} className="yacht-item">
//               <h2>{yacht.first_name}</h2>
//               <img src={yacht.image} alt={yacht.first_name} />
//               <p>{yacht.description}</p>
//               <p>Price: {yacht.price}</p>
//               <p>Capacity: {yacht.capacity}</p>
//               <Link to={`/yacht/${yacht.id}`}>View Details</Link>
//             </div>
//           ))
//         ) : (
//           <p>No yachts available</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = ({ yachts }) => {
  return (
    <div className="home-container">
      <h1>Explore Our Luxury Yachts</h1>
      <div className="yachts-grid">
        {yachts.map(yacht => (
          <div key={yacht.id} className="yacht-card">
            <img src={yacht.image} alt={yacht.first_name} />
            <div className="yacht-details">
              <h2>{yacht.first_name}</h2>
              <p className="yacht-price">{yacht.price}</p>
              <p className="yacht-description">{yacht.description}</p>
              <div className="yacht-amenities">
                <p><strong>Amenities:</strong></p>
                <ul>
                  {yacht.amenities.map((amenity, index) => (
                    <li key={index}>{amenity}</li>
                  ))}
                </ul>
              </div>
              <Link to={`/yacht/${yacht.id}`} className="btn">View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;