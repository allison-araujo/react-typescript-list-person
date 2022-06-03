import { useEffect, useState } from "react";
import Person from "../../Api/api";
import Button from "../Button";
import Content from "../Content";
import ListPerson from "../ListPerson";
import Loading from "../Loading";
import { Input } from "./styles";
interface IDataProps {
  gender: string;
  name: {
    first: string;
    last: string;
  };
  picture: {
    medium: string;
  };
  location: {
    country: string;
  };
  dob: {
    age: number;
  };

  id: {
    value: string | number;
  };
}

const SearchPerson = () => {
  const [searchPerson, setSearchPerson] = useState("");
  const [filterPerson, setFilterPerson] = useState([] as any);
  const [loading, setLoading] = useState(false);

  const user = new Person();

  useEffect(() => {
    try {
      setLoading(true);
      user.searchPersonList(searchPerson).then(res => {
        if (searchPerson.length) {
          const filterData = res.map((item: IDataProps) => ({
            id: item.id.value,
            medium: item.picture.medium,
            first: item.name.first,
            last: item.name.last,
            age: item.dob.age,
            location: item.location.country,
            gender: item.gender,
          }));

          setFilterPerson(filterData);
          setLoading(false);
        }
      });
    } catch (error) {
      alert("Nao foi possivel buscar PEssoa");
      setLoading(false);
    }
  }, []);

  const handleChangeInput = (event: any) => {
    event.preventDefault();
    if (event.target.value.length) {
      setSearchPerson(event.target.value);
    }
  };

  return (
    <Content>
      <Input
        type="text"
        placeholder="search users.."
        onChange={handleChangeInput}
      />
      <Button type="submit" placeholder="Search">
        Search
      </Button>
      <Loading spinning={loading}>
        <ListPerson person={filterPerson} />
        {/* <TablePerson person={filterPerson} /> */}
      </Loading>
    </Content>
  );
};

export default SearchPerson;
