import { useEffect, useState } from "react";
import Person from "../../Api/api";
import Option from "../../utils/options";
import Button from "../Button";
import Content from "../Content";
import EmptyPage from "../EmptyPage";
import Loading from "../Loading";
import TablePerson from "../TablePerson";
import {
  Checkbox,
  Column,
  Container,
  Input,
  InputSelect,
  InputSelectName,
  Row,
  Space,
  Switch,
  Toogle,
} from "./styles";
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
      alert("Nao foi possivel buscar Pessoa");
      setLoading(false);
    }
  }, [searchPerson]);

  return (
    <Content>
      <Container>
        <Row>
          <Column>
            <Input
              type="text"
              placeholder="search users.."
              onChange={e => setSearchPerson(e.target.value)}
            />
          </Column>
          <Column>
            <Button type="submit" placeholder="Search">
              Search
            </Button>
          </Column>
        </Row>
        <Row>
          <Space>
            <Column>
              <InputSelectName>
                {Option.map(option => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </InputSelectName>
            </Column>
            <Column>
              <InputSelect>
                {Option.map(option => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </InputSelect>
            </Column>
            <Column>
              <Toogle>
                <Checkbox type="checkbox" />
                <Switch />
              </Toogle>
            </Column>
          </Space>
        </Row>

        {searchPerson.length === 0 ? (
          <EmptyPage />
        ) : (
          <Loading spinning={loading}>
            {/* <ListPerson person={filterPerson} /> */}
            <TablePerson person={filterPerson} />
          </Loading>
        )}
      </Container>
    </Content>
  );
};

export default SearchPerson;
