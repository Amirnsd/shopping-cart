import React, { createContext, useEffect, useState } from 'react'
import '../Styles/ProductData.css';

export const DataContext = createContext();

export default function ProductData({ children }) {

    const [products,setProducts] = useState([]);
    const [error,SetError] = useState(null);
    const [loading,setLoading] = useState(true);
    const [selectedItems,setSelectedItems] = useState([]);
    const [cartItemsAdded,setCartItemsAdded] = useState(0);
    const [newItems, setNewItems] = useState([]);

    useEffect(()=> {
        fetch('https://fakestoreapi.com/products', {mode: "cors"})
        .then((response) => {
            if(response.status >= 400){
                throw new Error("Error: " + response.status)
            }
                return response.json();

        }).then((data) => {
            
            setProducts(data)

        }).catch((error)=> SetError(error))
            .finally(()=>setLoading(false))
    },[])

    if (loading) return <h3>Loading...</h3>
    if  (error) return <h3>There is an error</h3>

  return (
    <DataContext.Provider value={{products,setProducts,
    selectedItems,setSelectedItems,
    cartItemsAdded,setCartItemsAdded
    ,newItems, setNewItems}}>
        { children }
    </DataContext.Provider>
  )
}

