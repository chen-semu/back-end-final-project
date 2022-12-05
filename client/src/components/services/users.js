
const basicAPI='http://localhost:8080'

const fetchUsers= async ()=>{
    return await fetch(`https://us-east-1.aws.data.mongodb-api.com/app/application-0-jffdt/endpoint/users`)
    .then(res=>res.json())
    .catch((error)=>{console.log(error);})
  }

  const signIn= async ()=>{
    return await fetch(`${basicAPI}/users/log-in`)
    .then(res=>res.json())
    .catch((error)=>{console.log(error);})
  }


  export {fetchUsers, signIn}