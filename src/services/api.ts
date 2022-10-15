import http from "../https/http";

class Person {
  onError = (error: { response: { data: any } }) => {
    const {
      response: { data },
    } = error;

    return data.error.message;
  };

  async searchPersonList(keyword: string) {
    try {
      const res = await http.get(`/?results=12&name=${keyword}`);
      const json = res.data.results;

      return json;
    } catch {
      return this.onError;
    }
  }
  async profilePersonId(id: number) {
    try {
      const res = await http.get(`/?results=1&id=${id}`);
      const json = res.data.results;

      return json;
    } catch {
      return this.onError;
    }
  }

  async searchGenre(genre: string) {
    try {
      const res = await http.get(`/?results=12&gender=${genre}`);
      const json = res.data.results;

      return json;
    } catch {
      return this.onError;
    }
  }

  async searchNat(nat: string) {
    try {
      const res = await http.get(`/?results=12&nat=${nat}`);
      const json = res.data.results;

      return json;
    } catch {
      return this.onError;
    }
  }
}

export default Person;
