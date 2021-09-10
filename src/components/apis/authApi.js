import axios from "axios";

export default axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1",
});
