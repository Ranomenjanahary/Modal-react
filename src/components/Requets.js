import axios from "axios";

const clients = axios.create({
  Url: "https://jsonplaceholder.typicode.com/posts"
});

export default clients;