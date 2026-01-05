import React from 'react';

interface CroquisMapProps {
  locationName: string;
  mapSrc: string;
}

const CroquisMap: React.FC<CroquisMapProps> = ({ locationName, mapSrc }) => {
  return (
    <div className="croquis-map-container">
      <h3>{locationName}</h3>
      <iframe
        src={mapSrc}
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default CroquisMap;
