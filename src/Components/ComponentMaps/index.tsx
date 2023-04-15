import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { Map } from "../../Pages/ProfilePerson/styles";

const ComponentMaps = ({ position }: any) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyATYIvLAogpKJafhfsH5UO_wZHtyVnb3jE",
  });

  return (
    <Map>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={position}
          zoom={2}
        >
          <Marker position={position} />
        </GoogleMap>
      ) : (
        <div>
          <h1>
            Maps cant connection link a site. Please send to e-mail to squad.
          </h1>
        </div>
      )}
    </Map>
  );
};

export default ComponentMaps;
