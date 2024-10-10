import React, { useContext, useState } from 'react'
import { DataContext } from './ProductData';
import "../Styles/Shop.css"

function Shop() {

  const {products,selectedItems
    ,setSelectedItems,
    setCartItemsAdded,
   setNewItems} = useContext(DataContext);

   const [added, setAdded] = useState([]);
  
  
  const addingButton = (product) => {
          
      const existingItem = selectedItems.find(item => item.id === product.id);

      if(existingItem){
        setNewItems(preItem => 
          preItem.map((item)=> item.id === product.id ? {...item, count : item.count + 1 } : item)
        )
      }else {
        setSelectedItems([...selectedItems, product]);
        setNewItems(prevItems => [...prevItems, {...product, count: 1}])
      }

      setAdded([...added, product.id]);

      setTimeout(()=> {
        setAdded(prevAdd => prevAdd.filter(id => id !== product.id))
      },3000)

      setCartItemsAdded((prevItems) => prevItems + 1);

      
  }

  return (
    <>
      <div className="products-container">
        {products.map((product)=> (
    <ul>
        <li key={product.id} className ='products'>
            <img src = {product.image} alt={product.title}/>

              <div className="details">
                <h3>{product.title}</h3>
                <p>{product.price}</p>
                <button onClick={() => addingButton(product)}>
                {added.includes(product.id) ? "Added!" : "Add to Cart"}
                </button>
              </div>
            
        </li>
    </ul>
  ))}
</div>
    </>
  )
}

export default Shop;







