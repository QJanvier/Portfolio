import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

function Pin({ icon, text, to, ariaLabel}) {
    return (
        <li className="nav-item">
            <Link className="nav-link" to={to} smooth="true" aria-label={ariaLabel}>
                <FontAwesomeIcon icon={icon} />
                <span className="link-text">{text}</span>
            </Link>
        </li>
    )
}

Pin.propTypes = {
    icon: PropTypes.object,
    text: PropTypes.string,
    to: PropTypes.string,
    ariaLabel: PropTypes.string,
}

export default Pin