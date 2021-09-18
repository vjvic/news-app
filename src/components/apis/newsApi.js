import axios from "axios";

export default axios.create({
  baseURL: "https://api.newscatcherapi.com/v2",
  headers: {
    "x-api-key": process.env.REACT_APP_API_KEY,
    "x-rapidapi-host": "free-news.p.rapidapi.com",
  },
});
