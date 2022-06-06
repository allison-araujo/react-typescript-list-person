import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Person from "../../Api/api";
import Button from "../../Components/Button";
import ComponentMaps from "../../Components/ComponentMaps";
import Content from "../../Components/Content";
import Details from "../../Components/Details";
import EmptyPage from "../../Components/EmptyPage";
import Loading from "../../Components/Loading";
import { ButtonLink } from "./styles";

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

          setLoading(false);
        }
      });
    } catch (error) {
      alert("Nao foi possivel buscar Pessoa");
      setLoading(false);
    }
  }, [personId]);

  return (
    <Content>
      <Loading spinning={loading}>
        {person.length !== 0 ? (
          <>
            <ComponentMaps
              latitude={person[0].latitude}
              longitude={person[0].longitude}
              zoom={15}
            />
            <ButtonLink>
              <Link to={`/`}>
                <Button>Voltar</Button>
              </Link>
            </ButtonLink>
            <Details
              image={person[0].photo}
              name={person[0].name}
              city={person[0].city}
              state={person[0].state}
            />
          </>
        ) : (
          <EmptyPage text="User Not Id exists!" />
        )}
      </Loading>
    </Content>
  );
};

export default ProfilePerson;
