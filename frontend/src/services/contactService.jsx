import axios from "axios"

function handleMessage(data){
return axios.post(`${import.meta.env.VITE_API_URL}/contact/`,data)
 .then((response)=>{
    return response.data
 })

}export default handleMessage;