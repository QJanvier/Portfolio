import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCopyright} from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <>
            <div className='footer'>
                <p className='footer__p'> <FontAwesomeIcon icon={faCopyright} /> Janvier Quentin 2024 - Tous droits réservés</p>
            </div>
        </>
    )
}

export default Footer