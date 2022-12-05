
const basicAPI='http://localhost:8080'

const fetchCities= async ()=>{
  return await fetch(`${basicAPI}/cities`)
  .then(res=>res.json())
  .catch((error)=>{console.log(error);})
}

const fetchOrders=async ()=>{
  return await fetch(`${basicAPI}/orders`)
    .then(res=>res.json())
    .catch((error)=>{console.log(error);})
  }

const fetchStores=async ()=>{
  return await fetch(`${basicAPI}/stores`)
    .then(res=>res.json())
    .catch((error)=>{console.log(error);})
  }

const fetchProducts=async ()=>{
    return await fetch(`${basicAPI}/products`)
    .then(res=>res.json())
    .catch((error)=>{console.log(error);})
  }

  export {fetchCities, fetchOrders, fetchProducts, fetchStores}