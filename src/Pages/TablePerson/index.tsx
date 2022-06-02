import React from "react";
import { Column, Container, ImageBoxRow, Name, Row } from "./styles";

const TablePerson = ({ person }: any) => {
  return (
    <div>
      {person.map((item: any) => (
        <Container>
          <Row>
            <Column>
              <ImageBoxRow src={item.medium} alt={item.first} />
              <Name>{item.first}</Name>
            </Column>
          </Row>
        </Container>
      ))}
    </div>
  );
};

export default TablePerson;
