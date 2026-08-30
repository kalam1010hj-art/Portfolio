import axios from "axios";

function getProjects() {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/projects/`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    
}

export default getProjects;