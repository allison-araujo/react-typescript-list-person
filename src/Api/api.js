import axios from "axios";

class Person {
  constructor() {
    this.BASE_URL = "https://randomuser.me/api";
  }

  onError = error => {};

  async searchPersonList() {
    try {
      const res = await axios.get(`${this.BASE_URL}/?results=12`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = res.data.results;

      return json;
    } catch (error) {
      if (error.response) {
        console.log(error.message);
        return false;
      }
    }
  }
  async profilePersonId(id) {
    try {
      const res = await axios.get(`${this.BASE_URL}/?results=1&id=${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = res.data.results;

      return json;
    } catch (error) {
      if (error.response) {
        console.log(error.message);
        return false;
      }
    }
  }
}

export default Person;
