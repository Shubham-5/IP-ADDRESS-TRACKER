import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/SearchBar";
import InfoCard from "./components/InfoCard";
import Map from "./components/Map";

function App() {

  // Custom Location State
  const [userData, setUserData] = useState({
    ip: "",
    location: "",
    timezone: "",
    isp: "",
    latlng: null,
  });
  const [error, setError] = useState(false);

  // Get User Information when DOM Loads

  useEffect(() => {
    //calling funct
    const getClientData = async () => {
      await fetch(
        "https://geo.ipify.org/api/v1?apiKey=at_xzlpTT7dNpNfP7D0NMM3RnZ9bf6Sd"
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setUserData({
            ip: data.ip,
            location: data.location,
            timezone: `UTC${data.location.timezone}`,
            isp: data.isp,
            latlng: [data.location.lat, data.location.lng],
          });
        })
        .catch(function (error) {
          setError(error.response.data.messages);
        });
    };
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
          <InfoCard userData={userData} error={error} />
        </div>

        <div id='map' className='map-container'>
          <Map latlng={userData.latlng} />
        </div>
      </div>
    </>
  );
}

export default App;
