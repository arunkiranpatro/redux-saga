import React from 'react';
import loading from '../../css/images/loading.gif';

export default function Loading() {
  return (
    <div className="loading-div">
      <img
        src={loading}
        style={{ width: '200px', margin: 'auto', display: 'block' }}
        alt="Loading..."
      />
    </div>
  );
}
