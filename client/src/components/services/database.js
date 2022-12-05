
const basicAPI='http://localhost:8080'

const fetchCities= async ()=>{
  return await fetch(`https://us-east-1.aws.data.mongodb-api.com/app/application-0-jffdt/endpoint/cities`)
  .then(res=>res.json())
  .catch((error)=>{console.log(error);})
}

const fetchOrders=async ()=>{
  return await fetch(`https://us-east-1.aws.data.mongodb-api.com/app/application-0-jffdt/endpoint/orders`)
    .then(res=>res.json())
    .catch((error)=>{console.log(error);})
  }

const fetchStores=async ()=>{
  return await fetch(`https://us-east-1.aws.data.mongodb-api.com/app/application-0-jffdt/endpoint/stores`)
    .then(res=>res.json())
    .catch((error)=>{console.log(error);})
  }

const fetchProducts=async ()=>{
    return await fetch(`https://us-east-1.aws.data.mongodb-api.com/app/application-0-jffdt/endpoint/products`)
    .then(res=>res.json())
    .catch((error)=>{console.log(error);})
  }

  export {fetchCities, fetchOrders, fetchProducts, fetchStores}