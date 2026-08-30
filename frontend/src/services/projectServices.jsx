import axios from "axios";

function getProjects() {
  return axios
    .get("http://127.0.0.1:8000/projects/")
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    
}

export default getProjects;