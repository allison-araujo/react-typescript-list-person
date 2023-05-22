import { useNavigate } from "react-router-dom";
import { IDataProps } from "../../ts";
import DetailsImage from "../DetailsImage";
import { PersonInformations, PersonTrs } from "./styles";

type TypePersons = {
  person: IDataProps;
};

const ListPerson = ({
  person: { name, picture, dob, location, gender },
}: TypePersons) => {
  const navigate = useNavigate();
  const personName = `${name.first}`;
  const picturePerson = `${picture.large}`;
  const age = `${dob.age}`;
  const personGender = `${gender}`;
  const country = `${location.country}`;
  const city = `${location.city}`;
  const latiture = `${location.coordinates.latitude}`;
  const longitude = `${location.coordinates.longitude}`;

  return (
    <PersonTrs>
      <PersonInformations>
        <DetailsImage
          onClick={() =>
            navigate(
              `/profile?name=${personName}&picture=${picturePerson}&city=${city}&location=${country}&latitude=${latiture}&=longitude=${longitude}`)}            )
          
          src={picturePerson}
          alt={personName}
          data-cy="files"
        />
      </PersonInformations>
      <PersonInformations>{personName}</PersonInformations>
      <PersonInformations>{age}</PersonInformations>
      <PersonInformations>{country}</PersonInformations>
      <PersonInformations>{personGender}</PersonInformations>
    </PersonTrs>
  );
};

export default ListPerson;
