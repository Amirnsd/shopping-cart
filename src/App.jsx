import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css'
import Shop from './Components/Shop';
import Home from './Components/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping,faHatCowboy } from '@fortawesome/free-solid-svg-icons';
import Checkout from './Components/Checkout';
import { useContext } from 'react';
import { DataContext } from './Components/ProductData';

function App() {

  const {cartItemsAdded} = useContext(DataContext);

  return (
    <Router>
      <div className="container">
        <div className="links">
          <div className="rightside-links">
            <Link to = "/"><FontAwesomeIcon icon={faHatCowboy} /></Link> 
            <Link to = "/shop" style={{margin: "40px"}}>Shop</Link>
            <Link to = "/">Home</Link>
          </div>
              <div className="leftside-links">
              <Link to = "/checkout" style={{margin: "40px"}}>
              <div className="cart-icon-container">
              <FontAwesomeIcon icon={faCartShopping} className='cart-icon'/>
                {cartItemsAdded > 0 && <p>{cartItemsAdded}</p>}
              </div>
              </Link>
              </div>
        </div>
        
      <Routes>
        <Route path = "/shop" element = {<Shop/>}/>
        <Route path = '/' element = {<Home />} />
        <Route path = '/checkout' element = {<Checkout />}/>
      </Routes>
      </div>
    </Router>
  )
}

export default App
