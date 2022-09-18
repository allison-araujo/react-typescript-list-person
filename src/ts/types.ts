export type IDataProps = {
  gender: string;
  name: {
    first: string;
    last: string;
  };
  picture: {
    medium: string;
  };
  location: {
    country: string;
  };
  dob: {
    age: number;
  };

  id: {
    value: string | number;
  };
};

export type IProfileProsp = {
  name: {
    first: string;
  };
  picture: {
    medium: string;
  };
  location: {
    city: string;
    state: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
  id: {
    value: string | number;
  };
};

export type IProps = {
  person: [];
};

export type IItemsProps = {
  medium: string;
  first?: string;
  id: string | number;
};

export type IItemsType = {
  id?: string | number;
  medium?: string;
  name?: string;
  first?: string;
  last?: string;
  age?: string;
  location?: string;
  gender?: string;
};
