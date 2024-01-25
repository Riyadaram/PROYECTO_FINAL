import { Link } from 'react-router-dom'
import Home from '../../assets/footer_menu_logos/Home-button-logo.png'
import Plus from '../../assets/footer_menu_logos/Plus-logo-button.png'
import Search from '../../assets/footer_menu_logos/Search-button-logo.png'
import './FooterMenu.css'


const FooterMenu = () => {

    return (
        <div className="bottom-menu">
            <footer>
                <button>
                    <Link to="/">
                      <img src={Home} className="home-button" alt="Home Button Logo"/>
                    </Link>
                </button>

                <button>
                    <Link to="/"> {/*De momento este botón te lleva a Home hasta que se definan nuevas rutas*/}
                      <img src={Plus} className="plus-button" alt="Plus Button Logo"/>
                    </Link>
                </button>
                    
                <button>
                    <Link to="/"> {/*De momento este botón te lleva avHome hasta que se definan nuevas rutas*/}
                      <img src={Search} className="search-button" alt="Search Button Logo"/>
                    </Link>
                </button>
            </footer>
        </div>
    )

}

export default FooterMenu