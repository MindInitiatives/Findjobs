import axios from "axios";

const corsURL = "https://cors-anywhere.herokuapp.com/"

export default axios.create({
  baseURL: `${corsURL}https://api.jobboard.tedbree.com/v1`,
  headers: {
    "Content-type": "application/json"
  }
});