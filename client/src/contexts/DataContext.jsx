import {fetchCities, fetchOrders, fetchProducts, fetchStores} from "../components/services/database"
import {fetchUsers} from "../components/services/users"
import { useState, useEffect, useContext, createContext } from "react"

const AdminContext=createContext()

export function useAdminData(){
    return useContext(AdminContext)
} 

export default function DataProvider({children}){
    const[cities, setCities]=useState([])
    const[orders, setOrders]=useState([])
    const[products, setProducts]=useState([])
    const[stores, setStores]=useState([])
    const[users, setUsers]=useState([])
    useEffect(()=>{
        fetchUsers().then((res)=>res.massage?setUsers(res.massage):setUsers(res))
        fetchOrders().then((res)=>res.massage?setOrders(res.massage):setOrders(res))
        fetchProducts().then((res)=>res.massage?setProducts(res.massage):setProducts(res))
        fetchCities().then((res)=>res.massage?setCities(res.massage):setCities(res))
        fetchStores().then((res)=>res.massage?setStores(res.massage):setStores(res))
    },[])
    return(
        <AdminContext.Provider value={{cities,orders,products,stores,users}}>
            {children}
        </AdminContext.Provider>
    )

}