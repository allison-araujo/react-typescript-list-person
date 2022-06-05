import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Person from "../../Api/api";
import Button from "../../Components/Button";
import CheckboxButton from "../../Components/CheckboxButton";
import Content from "../../Components/Content";
import EmptyPage from "../../Components/EmptyPage";
import LifoPerson from "../../Components/LifoPerson";
import ListPerson from "../../Components/ListPerson";
import Loading from "../../Components/Loading";
import Select from "../../Components/SelectInput";
import Toogle from "../../Components/Toggle";
import values from "../../utils/options";
import valuesOptions from "../../utils/valuesOptions";
import { Column, Container, Input, Row, Space } from "./styles";

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
  const { id } = useParams();
  const [checked, setChecked] = useState(false);
  const [checkedbox, setCheckedbox] = useState(true);
  // const [select, setSelect] = useState();

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

  const handleChangeToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  const handleChangeCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedbox(e.target.checked);
  };

  const handleSelectChange = () => {
    console.log("test");
  };
  const handleChangeSelect = () => {
    console.log("test");
  };

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
              <Select options={valuesOptions} onChange={handleChangeSelect} />
            </Column>
            <Column>
              <Select options={values} onChange={handleSelectChange} />
            </Column>
            <Column>
              <CheckboxButton
                checked={checkedbox}
                label="Adults"
                handleChange={handleChangeCheckBox}
              />
            </Column>
            {searchPerson.length !== 0 ? (
              <Column>
                <Toogle
                  checked={checked}
                  label="Listar"
                  handleChange={handleChangeToggle}
                />
              </Column>
            ) : (
              ""
            )}
          </Space>
        </Row>

        {searchPerson.length === 0 ? (
          <EmptyPage text="No User found! " />
        ) : (
          <Loading spinning={loading}>
            <Link to={`/profile/${id}`}>
              {checked ? (
                <ListPerson person={filterPerson} />
              ) : (
                <LifoPerson person={filterPerson} />
              )}
            </Link>
          </Loading>
        )}
      </Container>
    </Content>
  );
};

export default SearchPerson;
