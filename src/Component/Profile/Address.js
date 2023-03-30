import React from 'react';

const Address = () => {
  const street = "wed souhil";
  const city = "nabeul";
  const state = "tunisie";
  const zip = "12345";
  
  return (
    <div>
      <p>{street}</p>
      <p>{city}, {state} {zip}</p>
    </div>
  );
};

export default Address;
