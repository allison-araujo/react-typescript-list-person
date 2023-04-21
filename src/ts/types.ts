export type IDataProps = {
  gender: string;
  login: {
    uuid: string;
  };
  name: {
    first: string;
    last: string;
  };
  location: {
    country: string;
    city: string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
  };
  dob: {
    age: string;
  };
  picture: {
    large: string;
  };
};
