import axios from "axios";

export default axios.create({
  baseURL: "https://randomuser.me/api/1.4",
  headers: {
    "Content-type": "application/json",
  },
});
