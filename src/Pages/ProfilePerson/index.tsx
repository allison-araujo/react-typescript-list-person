import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Person from "../../Api/api";
import Loading from "../../Components/Loading";
import { Container } from "./styles";

{
  /*exibir

 foto,
 nome,
 cidade,
 pais,
 coodenaas

*/
}

interface IProfileProsp {
  name: {
    first: string;
  };
  picture: {
    medium: string;
  };
  location: {
    city: string;
    state: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
  id: {
    value: string | number;
  };
}
interface ITextProps {
  text: string;
}
interface IDataProps {
  id: string | number;
  name: string;
  photo: string;
  city: string;
  state: string;
  latitude: string;
  longitude: string;
}

const ProfilePerson = () => {
  const [person, setPerson] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id: personId } = useParams();

  const user = new Person();

  useEffect(() => {
    try {
      setLoading(true);
      user.profilePersonId(personId).then(res => {
        if (res) {
          const filterProfile = res.map((item: IProfileProsp) => ({
            id: item.id.value,
            name: item.name.first,
            photo: item.picture.medium,
            city: item.location.city,
            state: item.location.state,
            latitude: item.location.coordinates.latitude,
            longitude: item.location.coordinates.longitude,
          }));

          setPerson(filterProfile);
          console.log("filterPRofile componen PRofile=> ", filterProfile);
          setLoading(false);
        }
      });
    } catch (error) {
      alert("Nao foi possivel buscar Pessoa");
      setLoading(false);
    }
  }, []);

  // const AnyReactComponent = ({ text }: ITextProps) => <div>{text}</div>;

  return (
    <Container>
      <Loading spinning={loading}>
        {person.map((item: IDataProps) => (
          <>
            <h1>{item.name}</h1>
            <div>{item.state}</div>
          </>
        ))}
      </Loading>
      <div>
        {person && person.photo}
        {person.city}
        {person.state}
        {person.latitude}
        {person.longitude}
      </div>
    </Container>

    // <div style={{ height: '100vh', width: '100%' }}>
    //   <GoogleMapReact
    //     bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
    //     defaultCenter={this.props.center}
    //     defaultZoom={10}
    //   >
    //     <AnyReactComponent
    //       lat={item.latitude}
    //       lng={item.longitude}
    //       text="My Marker"
    //       />
    //   </GoogleMapReact>
    // </div>
    // ))}
  );
};

export default ProfilePerson;
