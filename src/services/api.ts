import http from "../https/http";

interface TypeParams {
  gender: string;
  nat: string;
}

export const searchPersonList = async ({ gender, nat }: TypeParams) => {
  try {
    const res = await http.get(`/?results=12&gender=${gender}&nat=${nat}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = res.data.results;

    return json;
  } catch (error) {
    return error;
  }
};
