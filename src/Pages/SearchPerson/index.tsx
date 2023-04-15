import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CheckboxButton from "../../Components/CheckboxButton";
import Content from "../../Components/Content";
import EmptyPage from "../../Components/EmptyPage";
import LifoPerson from "../../Components/LifoPerson";
import ListPerson from "../../Components/ListPerson";
import Loading from "../../Components/Loading";
import Select from "../../Components/SelectInput";
import Toogle from "../../Components/Toggle";
import * as servicesPerson from "../../services/api";
import { IDataProps } from "../../ts/types";
import { options } from "../../utils/options";
import {
  Button,
  Column,
  Container,
  Direction,
  Input,
  Row,
  Space,
} from "./styles";

const SearchPerson = () => {
  const [searchPerson, setSearchPerson] = useState("" as any);
  const [filterPerson, setFilterPerson] = useState([] as any);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [checked, setChecked] = useState(false);
  const [checkedbox, setCheckedbox] = useState(true);
  const [select, setSelect] = useState("");
  const [optionSelected, setOptionsSelected] = useState([] as any);
  const [selectedFilter, setSelectedFilter] = useState("");

  useEffect(() => {
    try {
      setLoading(true);

      if (select === "") {
        servicesPerson.searchPersonList(searchPerson).then(res => {
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
      }
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

  console.log("filtrar por =>>>>>", select);

  return (
    <Content>
      <Container>
        <Row>
          <Input
            type="text"
            placeholder="search users.."
            onChange={e => setSearchPerson(e.target.value)}
          />

          <Column>
            <Direction>
              <Button type="submit" placeholder="Search">
                Search
              </Button>
            </Direction>
          </Column>
        </Row>
        <Row>
          <Space>
            <Column>
              <Select
                options={options}
                onChange={e => setSelect(e.target.value)}
              />
            </Column>
            <Column>
              <Select
                options={optionSelected}
                onChange={e => setSelectedFilter(e.target.value)}
              />
            </Column>
            <Column>
              <CheckboxButton
                checked={checkedbox}
                label="Adultos"
                handleChange={handleChangeCheckBox}
              />
            </Column>
            {searchPerson.length !== 0 ? (
              <Column>
                <Toogle
                  checked={checked}
                  label="Lista"
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
            <Link style={{ textDecoration: "none" }} to={`/profile/${id}`}>
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
