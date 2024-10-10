import { DataContext } from './ProductData';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import '../Styles/Checkout.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';


function Checkout() {
    const { newItems, setNewItems,setCartItemsAdded } = useContext(DataContext); 
    const [finalPrice, setFinalPrice] = useState(0);


    useEffect(()=>{
        const price = newItems.reduce((sum,item)=> sum + item.count* item.price,0);
        setFinalPrice(price);
    }, [newItems])

   const handleChange = (id, action) => {
        setNewItems(prevItems => {
            const updatedItems = prevItems.map((item) => {
                if(item.id === id) {
                    if(action === "add"){
                        setCartItemsAdded(prev => prev + 1)
                        return {...item, count: item.count + 1};
                        
                    } else if (action === "deduct" && item.count > 1) {
                        setCartItemsAdded(prev => prev -1 );
                        return {...item, count : item.count -1};
                    }  else if(action === "deduct" && item.count === 1){
                        setCartItemsAdded(prev => prev -1 );
                        return null;
                    }
                    
                }
                
                return item;    
            }).filter(Boolean)

            return updatedItems;
             
        })
   }

    const handleCheckout = () => {
        if (newItems.length === 0) {
            alert("There is nothing in your cart.");
            setF
        } else {
            alert("Oops! This is just a mock store, and there's no actual checkout available. But thanks for making it this far! Wishing you an amazing day ahead!");
        }
    }

    return (
        <div className='checkout-container'>
           <div className="price-section">
                <h2 className='cart-header'>Your Cart</h2>
                    {finalPrice > 0 && <span className="final-price">${finalPrice.toFixed(2)}</span>}
            </div>                
            {newItems.length === 0 ? (
               
                <h2>Your cart is empty.<br />
                <FontAwesomeIcon icon={faFaceFrown} className="fa-face-frown"  /></h2>
            ) : (
                <ul className='product-cart'>
                    {newItems.map((item) => (
                        <li key={item.id} className='product'>
                            <img src={item.image} alt={item.title}  />
                            <h3>{item.title}</h3>
                            <p>{item.price}</p>

                            <div className="buttons">
                                <button onClick={() => handleChange(item.id, "add")}>+</button>
                                <span className="count-display">{item.count}</span>
                                <button onClick={() => handleChange(item.id, "deduct")}>-</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            <button onClick={handleCheckout}>Checkout</button>
        </div>
    );
}

export default Checkout;