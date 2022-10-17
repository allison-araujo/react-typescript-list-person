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
import { genderValues, options } from "../../utils/options";
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
  const [searchPerson, setSearchPerson] = useState("");
  const [filterPerson, setFilterPerson] = useState([] as any);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [checked, setChecked] = useState(false);
  const [checkedbox, setCheckedbox] = useState(true);
  const [select, setSelect] = useState("");
  const [optionSelected, setOptionsSelected] = useState([] as any);
  const [selectedFilter, setSelectedFilter] = useState();

  useEffect(() => {
    try {
      setLoading(true);
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
    } catch (error) {
      alert("Nao foi possivel buscar Pessoa");
      setLoading(false);
    }
  }, [searchPerson]);

  useEffect(() => {
    if (select === "gender") {
      setLoading(true);
      setOptionsSelected(genderValues);
      servicesPerson.searchGenre(selectedFilter).then(res => {
        const filterGenre = res.map((item: IDataProps) => ({
          id: item.id.value,
          medium: item.picture.medium,
          first: item.name.first,
          last: item.name.last,
          age: item.dob.age,
          location: item.location.country,
          gender: item.gender,
        }));

        setFilterPerson(filterGenre);
        setLoading(false);
      });
    }
  }, [select]);

  const handleChangeToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  const handleChangeCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedbox(e.target.checked);
  };

  const handleSelectChange = (e: any) => {
    setSelect(e.target.value);
  };
  const handleSelectedValuesFilter = (e: any) => {
    setSelectedFilter(e.target.value);
  };

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
              <Select options={options} onChange={handleSelectChange} />
            </Column>
            <Column>
              <Select
                options={optionSelected}
                onChange={handleSelectedValuesFilter}
              />
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
