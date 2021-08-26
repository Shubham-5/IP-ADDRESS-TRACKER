import { React, useState } from "react";

const SearchBar = ({ setUserData }) => {
  const [address, setAddress] = useState("");
  const [error, setError] = useState(false);

  const formHandler = async (e) => {
    e.preventDefault();
    try {
      if (address) {
        await fetch(
          `https://geo.ipify.org/api/v1?apiKey=at_lAtjBUsOMq5lhFPbheWbDkNfSjQ3F&ipAddress=${address}`
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
        setError(false);
      }
    } catch (e) {
      console.log(e);
      setError(true);
    }
    setAddress("");
  };
  return (
    <>
      <form id='form' class='input-container pos-rel' onSubmit={formHandler}>
        <input
          type='text'
          name='ip-address'
          placeholder='Search for any IP address'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button type='submit'>
          <img src='/images/icon-arrow.svg' alt='' />
        </button>
      </form>
      {error && (
        <div className='Input-Error'>
          <h4>Please try again</h4>
        </div>
      )}
    </>
  );
};

export default SearchBar;
