import React from "react";
import { Container, Image, Location, Name } from "./styles";

interface IDetailsProps {
  image: string;
  name: string;
  city: string;
  state: string;
}

const Details = ({ image, name, city, state }: IDetailsProps) => {
  return (
    <Container>
      <Image src={image} />
      <Name>{name}</Name>
      <Location>
        {city}, {state}
      </Location>
    </Container>
  );
};

export default Details;
