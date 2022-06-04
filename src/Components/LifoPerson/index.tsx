import React from "react";
import { Container, Grid, ImageBoxRow, Name } from "./styles";

interface IItemsProps {
  medium: string;
  first: string;
}

type IProps = {
  person: [];
};

const LifoPerson = ({ person }: IProps) => {
  return (
    <Container>
      {person.map((item: IItemsProps) => (
        <Grid>
          <ImageBoxRow src={item.medium} alt={item.first} />
          <Name>{item.first}</Name>
        </Grid>
      ))}
    </Container>
  );
};

export default LifoPerson;
