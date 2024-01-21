import axios from "axios"



export const loginFunc = async (data)=> {
    try{
        let res = await axios.post("https://reqres.in/api/login",data);
        // console.log(res.data)
        return true;
    } catch(err) {
        return false;
    }
    
}

