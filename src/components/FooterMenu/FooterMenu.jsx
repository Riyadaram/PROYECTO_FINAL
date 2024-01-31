import { Link } from 'react-router-dom'
import Home from '../../assets/footer_menu_logos/Home_button.png'
import Plus from '../../assets/footer_menu_logos/Plus_button.png'
import Search from '../../assets/footer_menu_logos/Search_button.png'
import './FooterMenu.css'


const FooterMenu = () => {

    return (
        <div className="bottom-menu">
            <footer>
                <button>
                    <Link to="/user-content">
                      <img src={Home} className="basic-button" alt="Home Button Logo"/>
                    </Link>
                </button>

                <button>
                    <Link to="/add-file"> 
                      <img src={Plus} className="plus-button" alt="Plus Button Logo"/>
                    </Link>
                </button>
                    
                <button>
                    <Link to="/search"> 
                      <img src={Search} className="basic-button" alt="Search Button Logo"/>
                    </Link>
                </button>
            </footer>
        </div>
    )

}

export default FooterMenu