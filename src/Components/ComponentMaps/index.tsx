import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import React from "react";
import { Container } from "./styles";

interface ICoordenatsProps {
  zoom: number;
}
const ComponentMaps = ({ zoom }: ICoordenatsProps) => {
  const isLoaded = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyATYIvLAogpKJafhfsH5UO_wZHtyVnb3jE",
  });

  const containerStyle = {
    width: "100%",
    height: "300px",
  };

  const positon = {
    lat: 33.8074,
    lng: 157.0167,
  };

  return (
    <Container>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={positon}
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
