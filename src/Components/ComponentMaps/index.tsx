import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import React from "react";

const containerStyle = {
  width: "100%",
  height: "400px",
};

interface IMapsProps {
  latitude: number;
  longitude: number;
  zoom: number;
}

const ComponentMaps = ({ latitude, longitude, zoom }: IMapsProps) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyATYIvLAogpKJafhfsH5UO_wZHtyVnb3jE",
  });

  const center = {
    lat: Number(latitude),
    lng: Number(longitude),
  };

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={zoom} />
  ) : (
    <></>
  );
};
export default ComponentMaps;
