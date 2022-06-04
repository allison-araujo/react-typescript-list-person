import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import React from "react";
import { Container } from "./styles";

interface ICoordenatsProps {
  latitude: number;
  longitude: number;
  zoom: number;
}
const ComponentMaps = ({ latitude, longitude, zoom }: ICoordenatsProps) => {
  const isLoaded = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyATYIvLAogpKJafhfsH5UO_wZHtyVnb3jE",
  });

  const containerStyle = {
    width: "100%",
    height: "300px",
  };

  // const valuesDefault = {
  //   position: {
  //     lat: { latitude },
  //     lng: { longitude },
  //   },
  //   zoom: { zoom },
  // };

  return (
    <Container>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{ lat: latitude, lng: longitude }}
          zoom={zoom}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      ) : (
        <>
          <h1>Sem coordenadas</h1>
        </>
      )}
    </Container>
  );
};

export default ComponentMaps;
