interface TypeParamsFilter {
  keyword: string;
  person: [];
}

const filteredPerson = ({ person, keyword }: TypeParamsFilter) => {
  return <>{person.filter(item => item === keyword)}</>;
};

export default filteredPerson;
