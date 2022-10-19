import http from "../https/http";

<<<<<<< Updated upstream
interface TypeParams {
  valueParamsString: string;
}

interface TypeParamsNumber {
  valueParamsNumber: number;
}

export const searchPersonList = async (keyword: TypeParams) => {
=======
export const searchPersonList = async (keyword: string) => {
>>>>>>> Stashed changes
  try {
    const res = await http.get(`/?results=12&name=${keyword}`);
    const json = res.data.results;

    return json;
  } catch (error) {
    return error;
  }
};
<<<<<<< Updated upstream
export const profilePersonId = async (id: TypeParamsNumber) => {
=======
export const profilePersonId = async (id: number) => {
>>>>>>> Stashed changes
  try {
    const res = await http.get(`/?results=1&id=${id}`);
    const json = res.data.results;

    return json;
  } catch (error) {
    return error;
  }
};

export const searchGenre = async (genre: TypeParams) => {
  try {
    const res = await http.get(`/?results=12&gender=${genre}`);
    const json = res.data.results;

    return json;
  } catch (error) {
    return error;
  }
};

export const searchNat = async (nat: TypeParams) => {
  try {
    const res = await http.get(`/?results=12&nat=${nat}`);
    const json = res.data.results;

    return json;
  } catch (error) {
    return error;
  }
};
