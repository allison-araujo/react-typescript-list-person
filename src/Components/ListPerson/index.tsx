import { IItemsType } from "../../ts";
import { Container, ImageBox, Table, Tbody, Td, Th, Thead, Tr } from "./styles";

type Prop = {
  person: [];
};

const ListPerson = ({ person }: Prop) => {
  return (
    <>
      <Container>
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

          {person.map((item: IItemsType) => (
            <Tbody>
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
      </Container>
    </>
  );
};

export default ListPerson;
