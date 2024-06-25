import Pin from '../Pin/Pin';
import { faPhone, faFolderClosed, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <ul className="navbar-nav">
                    <Pin to="/" icon={faHouse} text="Accueil" ariaLabel={"Accueil"} />
                    <Pin to="/works" icon={faFolderClosed} text="Projets" ariaLabel={"Projets"} />
                    <Pin to="/about-me" icon={faUser} text="A propos de moi" ariaLabel={"A propos de moi"} />
                    <Pin to="/contact" icon={faPhone} text="Contact" ariaLabel={"Contact"} />
                </ul>
            </nav>
        </>
    )
}

export default Navbar