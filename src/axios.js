import axios from "axios";

const instance = axios.create({
  baseURL: "https://dev-camper-nikic-ivan.herokuapp.com",
});

export default instance;
