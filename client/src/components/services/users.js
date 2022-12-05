
const basicAPI='http://localhost:8080'

const fetchUsers= async ()=>{
    return await fetch(`${basicAPI}/users`)
    .then(res=>res.json())
    .catch((error)=>{console.log(error);})
  }

  export {fetchUsers}