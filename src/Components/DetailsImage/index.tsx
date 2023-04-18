import { ProfileDetailsImage } from "./styles";

export type TypeDetailsImageProps = {
  alt: string;
  src: string;
  position?: string | undefined;
  width?: string | undefined;
};

const DetailsImage = ({ ...props }: TypeDetailsImageProps) => {
  return <ProfileDetailsImage {...props} />;
};

export default DetailsImage;
