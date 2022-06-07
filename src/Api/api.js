import axios from "axios";

class Person {
  constructor() {
    this.BASE_URL = "https://randomuser.me/api/1.3";
  }

  onError = error => {
    const {
      response: { data },
    } = error;

    return data.error.message;
  };

  async searchPersonList(keyword) {
    try {
      const res = await axios.get(
        `${this.BASE_URL}/?results=12&name=${keyword}`,
        this.axiosRequest()
      );
      const json = res.data.results;

      return json;
    } catch {
      return this.onError;
    }
  }
  async profilePersonId(id) {
    try {
      const res = await axios.get(
        `${this.BASE_URL}/?results=1&id=${id}`,
        this.axiosRequest()
      );
      const json = res.data.results;

      return json;
    } catch {
      return this.onError;
    }
  }

  async searchGenre(genre) {
    try {
      const res = await axios.get(
        `${this.BASE_URL}/?results=12&gender=${genre}`,
        this.axiosRequest()
      );
      const json = res.data.results;

      return json;
    } catch {
      return this.onError;
    }
  }

  async searchNat(nat) {
    try {
      const res = await axios.get(
        `${this.BASE_URL}/?results=12&nat=${nat}`,
        this.axiosRequest()
      );
      const json = res.data.results;

      return json;
    } catch {
      return this.onError;
    }
  }

  axiosRequest() {
    return {
      headers: {
        "Content-Type": "application/json",
      },
    };
  }
}

export default Person;
