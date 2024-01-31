import { Link } from 'react-router-dom'
import logotype from '../../assets/logo/logotype.png'
import './NotFound.css'

const NotFound = () => {
  

  return (
    <div className="notfound">
       <div className='logo-container'>
        <a href="" >
          <img src={logotype} className="logotype app" alt="Your Cloud logo" />
        </a>

        <p className="notFound">
        Page Not Found...
      </p>
      <div className='btn-container'>
        <Link to="/" className="goback-btn">Go Back</Link>
      </div>
      </div>
      
      
      
    </div>
  )
}

export default NotFound