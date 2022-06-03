import React from "react";
import { Container, ImageBox, Table, Tbody, Td, Th, Thead, Tr } from "./styles";

type Prop = {
  person: [];
};

interface IItemsProps {
  id: string | number;
  medium: string;
  name: string;
  first: string;
  last: string;
  age: string;
  location: string;
  gender: string;
}

const ListPerson = ({ person }: Prop) => {
  return (
    <>
      <Container>
        {/* <Link to={`/profile/${id}`}> */}
        <Table>
          <Thead>
            <Tr>
              <Th>Photo</Th>
              <Th>Name</Th>
              <Th>Country</Th>
              <Th>Age</Th>
              <Th>Gender</Th>
            </Tr>
          </Thead>

          {person.map((item: IItemsProps) => (
            <Tbody key={item.id}>
              <Tr>
                <Td>
                  <ImageBox src={item.medium} alt={item.name} />
                </Td>
                <Td>
                  {item.first}
                  {item.last}
                </Td>

                <Td>{item.age}</Td>
                <Td>{item.location}</Td>
                <Td>{item.gender}</Td>
              </Tr>
            </Tbody>
          ))}
        </Table>
        {/* </Link> */}
      </Container>
    </>
  );
};

export default ListPerson;
