import axios from 'axios'

export const postContact = async(values)=>{
    const addingUSer = await axios.post('http://localhost:5001/auth/register',{...values})
}



export const fetchAccount =async()=>{
    const token=localStorage.getItem('token');
    const {data} = await axios.get('http://localhost:5001/auth/uracount',{headers:{Authorization:token}} );
    return data 
}



