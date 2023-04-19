import React, { FormEvent, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ButtonStyle from "../../Components/ButtonStyle";
import CheckboxButton from "../../Components/CheckboxButton";
import EmptyPage from "../../Components/EmptyPage";
import { Input } from "../../Components/Input/styles";
import LifoPerson from "../../Components/LifoPerson";
import ListPerson from "../../Components/ListPerson";
import Loading from "../../Components/Loading";
import Select from "../../Components/SelectInput";
import Toogle from "../../Components/Toggle";
import * as servicesPerson from "../../services/api";
import { IDataProps } from "../../ts/types";
import { options } from "../../utils/options";
import { Container, GroupSelect } from "./styles";

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

  const handleChangeToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  const handleChangeCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedbox(e.target.checked);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  console.log("filtrar por =>>>>>", select);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Container>
          <Input
            type="text"
            data-cy="search"
            placeholder="search users.."
            onChange={e => setSearchPerson(e.target.value)}
            value={searchPerson}
          />

          <ButtonStyle type="submit" placeholder="Search">
            Search
          </ButtonStyle>
        </Container>
        <GroupSelect>
          <Select
            options={options}
            onChange={e => setSelect!(e.target.value)}
          />

          <Select
            options={optionSelected}
            onChange={e => setSelectedFilter!(e.target.value)}
          />
        </GroupSelect>

        <CheckboxButton
          checked={checkedbox}
          label="Adults"
          handleChange={handleChangeCheckBox}
        />
        {searchPerson.length !== 0 ? (
          <Toogle
            checked={checked}
            label="Lista"
            handleChange={handleChangeToggle}
          />
        ) : (
          ""
        )}
      </form>

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
    </>
  );
};

export default SearchPerson;
