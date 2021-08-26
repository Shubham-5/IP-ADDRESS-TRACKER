import React from "react";

const InfoCard = ({ userData }) => {
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
            <p id='location'>{userData.location}</p>
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
};

export default InfoCard;
