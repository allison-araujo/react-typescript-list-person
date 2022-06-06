const options = [
  { value: "all", label: "All" },
  { value: "gender", label: "Genero" },
  { value: "age", label: "Idade" },
  { value: "nat", label: "Nacionalidade" },
];

const ageValues = [
  { value: "", label: "Selecione" },
  { value: "of age", label: " > 18" },
  { value: "minor", label: "< 18" },
];

const genderValues = [
  { value: "", label: "Selecione" },
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

const state = [
  { value: "", label: "Selecione" },
  { value: "au", label: "AU" },
  { value: "br", label: "BR" },
  { value: "ca", label: "CA" },
  { value: "ch", label: "CH" },
  { value: "de", label: "DE" },
  { value: "dk", label: "DK" },
  { value: "es", label: "ES" },
  { value: "fi", label: "FI" },
  { value: "fr", label: "FR" },
  { value: "gb", label: "GB" },
  { value: "ie", label: "IE" },
  { value: "ir", label: "IR" },
  { value: "no", label: "NO" },
  { value: "nl", label: "NL" },
  { value: "nz", label: "NZ" },
  { value: "tr", label: "TR" },
  { value: "us", label: "US" },
];
export { options, state, ageValues, genderValues };
