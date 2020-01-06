import React from "react";

const Index = () => {
  return (
    <div className="location_wrapper">
      <div className="center-wrapper">
        <h2
          style={{
            color: "#222",
            borderBottom: "1px solid #dddddd"
          }}
        >
          Location
        </h2>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0357783243076!2d72.86062741490095!3d19.062164487095856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAzJzQzLjgiTiA3MsKwNTEnNDYuMSJF!5e0!3m2!1sen!2sin!4v1578160027765!5m2!1sen!2sin"
        // width="100%"
        height="300"
        className="map"
        frameBorder="0"
        allowFullScreen
        title="Find a location"
      ></iframe>
    </div>
  );
};

export default Index;
