
import React, { useState } from 'react';
import './BookYacht.css';

const BookYacht = () => {
  const [booking, setBooking] = useState({
    yachtId: '',
    dateRange: '',
    guests: '',
    specialRequests: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking({
      ...booking,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8000/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
      .then(response => response.json())
      .then(data => {
        alert('Booking successful!');
        setBooking({
          yachtId: '',
          dateRange: '',
          guests: '',
          specialRequests: ''
        });
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="book-yacht-container">
      <form className="book-yacht-form" onSubmit={handleSubmit}>
        <h2>Book a Yacht</h2>
        <div className="form-group">
          <label htmlFor="yachtId">Yacht ID:</label>
          <input type="text" id="yachtId" name="yachtId" value={booking.yachtId} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="dateRange">Date Range:</label>
          <input type="text" id="dateRange" name="dateRange" value={booking.dateRange} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="guests">Guests:</label>
          <input type="number" id="guests" name="guests" value={booking.guests} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="specialRequests">Special Requests:</label>
          <textarea id="specialRequests" name="specialRequests" value={booking.specialRequests} onChange={handleChange}></textarea>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default BookYacht;