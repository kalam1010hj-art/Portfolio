import axios from "axios";

function getProjects() {
  console.log("API URL:", import.meta.env.VITE_API_URL);
  console.log("API URL:", import.meta.env.VITE_API_URL);
  return axios
    .get(`${import.meta.env.VITE_API_URL}/projects/`)

    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    
}

export default getProjects;