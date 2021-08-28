import { React, useState, useEffect } from "react";
import dotenv from "dotenv";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/SearchBar";
import InfoCard from "./components/InfoCard";
import Map from "./components/Map";

function App() {
  // Custom Location State
  const [userData, setUserData] = useState({
    ip: "8.8.8.8",
    location: "Mountain View, California, 94035",
    timezone: "UTC-05:00",
    isp: "Google LLC",
    latlng: null,
  });

  // Get User Information when DOM Loads
  const getClientData = async () => {
    await fetch(
      `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) =>
        setUserData({
          ip: data.ip,
          location: `${data.location.city}, ${data.location.region}, ${data.location.postalCode}`,
          timezone: `UTC${data.location.timezone}`,
          isp: data.isp,
          latlng: [data.location.lat, data.location.lng],
        })
      );
  };

  useEffect(() => {
    console.log(process.env.REACT_APP_API_KEY);
    //calling funct
    getClientData();
  }, []);

  return (
    <>
      <div className='App text-center'>
        <header>
          <h1 className='size-fill text-white'>IP Address tracker</h1>
        </header>

        <div className='input-info d-flex justify-content-center align-items-center mb-4'>
          <SearchBar setUserData={setUserData} />
        </div>

        <div className='result-info '>
          <InfoCard userData={userData} />
        </div>

        <div id='map' className='map-container'>
          <Map latlng={userData.latlng} />
        </div>
      </div>
    </>
  );
}

export default App;
