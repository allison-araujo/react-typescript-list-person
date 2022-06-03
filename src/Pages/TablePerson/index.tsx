import React from "react";
import { Container, Grid, ImageBoxRow, Name } from "./styles";

const TablePerson = ({ person }: any) => {
  return (
    <Container>
      {person.map((item: any) => (
        <Grid>
          <ImageBoxRow src={item.medium} alt={item.first} />
          <Name>{item.first}</Name>
        </Grid>
      ))}
    </Container>
  );
};

export default TablePerson;
