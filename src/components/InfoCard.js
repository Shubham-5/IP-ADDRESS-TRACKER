import React from "react";

const InfoCard = ({ userData, error }) => {
  if (error) {
    return (
      <div className='item error'>
        <h4>Error</h4>
        <div className='value'>{error}</div>
      </div>
    );
  } else if (userData) {
    return (
      <>
        <div className='info-card w-20 shadow '>
          <div className=' card-details d-flex pt-4 '>
            <div>
              <h3>IP ADDRESS</h3>
              <p id='ip-address'>{userData.ip}</p>
            </div>
            <div>
              <h3>LOCATION</h3>
              <p id='location'>{`${userData.location.city}, ${userData.location.region} ${userData.location.postalCode}`}</p>
            </div>
            <div>
              <h3>TIMEZONE</h3>
              <p id='timezone'>{userData.timezone}</p>
            </div>
            <div>
              <h3>ISP</h3>
              <p id='isp'>{userData.isp}</p>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <p>hi</p>;
  }
};

export default InfoCard;
