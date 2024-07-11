import React, { useState, useEffect } from 'react';

const ManageBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [newBooking, setNewBooking] = useState({
    yachtId: '',
    dateRange: '',
    guests: '',
    specialRequests: ''
  });

  useEffect(() => {
    fetch('http://localhost:8000/bookings')
      .then(response => response.json())
      .then(data => setBookings(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleEdit = (bookingId) => {
    console.log('Editing booking:', bookingId);
    // Handle edit logic here
  };

  const handleDelete = (bookingId) => {
    fetch(`http://localhost:8000/bookings/${bookingId}`, {
      method: 'DELETE'
    })
      .then(() => setBookings(bookings.filter(booking => booking.id !== bookingId)))
      .catch(error => console.error('Error deleting booking:', error));
  };

  const handleBook = () => {
    fetch('http://localhost:8000/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBooking)
    })
      .then(response => response.json())
      .then(data => setBookings([...bookings, data]))
      .catch(error => console.error('Error adding booking:', error));
  };

  const handleChange = (e) => {
    setNewBooking({ ...newBooking, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h2>Manage Bookings</h2>
      <div className="booking-list">
        {bookings.map(booking => (
          <div key={booking.id} className="booking-item">
            <p>Yacht ID: {booking.yachtId}</p>
            <p>Date Range: {booking.dateRange}</p>
            <p>Guests: {booking.guests}</p>
            <p>Special Requests: {booking.specialRequests}</p>
            <button onClick={() => handleEdit(booking.id)}>Edit</button>
            <button onClick={() => handleDelete(booking.id)}>Delete</button>
          </div>
        ))}
      </div>
      <div className="new-booking-form">
        <h3>Add New Booking</h3>
        <input
          type="text"
          name="yachtId"
          placeholder="Yacht ID"
          value={newBooking.yachtId}
          onChange={handleChange}
        />
        <input
          type="text"
          name="dateRange"
          placeholder="Date Range"
          value={newBooking.dateRange}
          onChange={handleChange}
        />
        <input
          type="text"
          name="guests"
          placeholder="Guests"
          value={newBooking.guests}
          onChange={handleChange}
        />
        <input
          type="text"
          name="specialRequests"
          placeholder="Special Requests"
          value={newBooking.specialRequests}
          onChange={handleChange}
        />
        <button onClick={handleBook}>Book</button>
      </div>
    </div>
  );
};

export default ManageBookings;