import React from 'react';

const MapComponent = () => {
  // This is the direct embed URL for the Paphos Archaeological Museum
  const mapSrc = "https://maps.google.com/maps?q=Archaeological%20Museum%20of%20the%20Paphos%20District&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <div style={{ width: '100%', height: '400px', marginTop: '20px' }}>
      <iframe
        width="100%"
        height="100%"
        id="gmap_canvas"
        src={mapSrc}
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        style={{ borderRadius: '8px', border: '1px solid #334960' }}
      ></iframe>
    </div>
  );
};

export default MapComponent;