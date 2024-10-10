import { useNavigate } from 'react-router-dom'
import '../Styles/Home.css'

function Home() {

  const nevigate = useNavigate();

  const shopping = () => {
    nevigate('/shop')
  }

  return (
    <div className="background-image">
        <div className="button-div">
          <h2>Welcome to EpicFabrics </h2>
          <button onClick={shopping}>Shop Now</button>
        </div>
    </div>
  )
}

export default Home
