import { useEffect, useState } from "react";
import Person from "../../Api/api";
import Content from "../Content";
import Loading from "../Loading";
import TablePerson from "../TablePerson";

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
  const [filterPerson, setFilterPerson] = useState([]);
  const [loading, setLoading] = useState(false);

  const user = new Person();

  useEffect(() => {
    try {
      setLoading(true);
      user.searchPersonList().then(res => {
        if (res) {
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

  // const handleChangeInput = (event: any) => {
  //   event.preventDefault();
  //   if (event.target.value.length) {
  //     setSearchPerson(event.target.value);
  //   }
  // };

  return (
    <Content>
      {/* <Input
        type="text"
        placeholder="search users.."
        onChange={e => setSearchPerson(e.target.value)}
      />{" "}
      <Button type="submit" placeholder="Search">
        Search
      </Button> */}
      <Loading spinning={loading}>
        {/* <ListPerson person={filterPerson} /> */}
        <TablePerson person={filterPerson} />
      </Loading>
    </Content>
  );
};

export default SearchPerson;
