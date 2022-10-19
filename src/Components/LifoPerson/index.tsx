import { IItemsProps, IProps } from "../../ts";
import { Container, Grid, ImageBoxRow, Name } from "./styles";

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
