import axios from "axios"

function handleMessage(data){
return axios.post("http://127.0.0.1:8000/contact/",data)
 .then((response)=>{
    return response.data
 })

}export default handleMessage;