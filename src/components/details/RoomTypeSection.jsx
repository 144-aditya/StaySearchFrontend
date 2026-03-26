import React from 'react';

function RoomTypeSection({ roomTypes }) {
  if (!roomTypes || roomTypes.length === 0) return null; // Safety check

  return (
    <div className="room-type-section">
      <h3>Room Types</h3>
      <div className="room-type-images" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        {roomTypes.map((room, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            <img
              src={room.image}
              alt={room.type}
              style={{ width: '200px', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
            />
            <p>{room.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoomTypeSection;
