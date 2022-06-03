import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Person from "../../Api/api";
import Loading from "../Loading";
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

          setLoading(false);
        }
      });
    } catch (error) {
      alert("Nao foi possivel buscar Pessoa");
      setLoading(false);
    }
  }, []);
  return (
    <Container>
      <Loading spinning={loading}>
        {person.map((one: IDataProps) => (
          <div key={one.id}>{one.name}</div>
        ))}
      </Loading>
    </Container>
  );
};

export default ProfilePerson;
