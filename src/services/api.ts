import http from "../https/http";

export const searchPersonList = async (keyword: string) => {
  try {
    const res = await http.get(`/?results=12&name=${keyword}`);
    const json = res.data.results;

    return json;
  } catch (error) {
    return error;
  }
};
export const profilePersonId = async (id: number) => {
  try {
    const res = await http.get(`/?results=1&id=${id}`);
    const json = res.data.results;

    return json;
  } catch (error) {
    return error;
  }
};

export const searchGenre = async (genre: string) => {
  try {
    const res = await http.get(`/?results=12&gender=${genre}`);
    const json = res.data.results;

    return json;
  } catch (error) {
    return error;
  }
};

export const searchNat = async (nat: string) => {
  try {
    const res = await http.get(`/?results=12&nat=${nat}`);
    const json = res.data.results;

    return json;
  } catch (error) {
    return error;
  }
};
