import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Person from "../../Api/api";
import Button from "../../Components/Button";
import ComponentMaps from "../../Components/ComponentMaps";
import Content from "../../Components/Content";
import Loading from "../../Components/Loading";
import { Image, Location, Name } from "./styles";

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
// interface ITextProps {
//   text: string;
// }
// interface IDataProps {
//   id: string | number;
//   name: string;
//   photo: string;
//   city: string;
//   state: string;
//   latitude: string;
//   longitude: string;
// }

const ProfilePerson = () => {
  const [person, setPerson] = useState([] as any);
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
  }, [personId]);

  console.log("person", person);
  return (
    <Content>
      <Loading spinning={loading}>
        <Link to={`/`}>
          <Button>Voltar</Button>
        </Link>
        <ComponentMaps
          latitude={person.latitude}
          longitude={person.longitude}
          zoom={person.zoom}
        />
        <span>{person.name}</span>

        <Image src={person.photo} />
        <Name>{person.first}</Name>
        <Location>
          {person.city}, {person.state}
        </Location>
      </Loading>
    </Content>
  );
};

export default ProfilePerson;
