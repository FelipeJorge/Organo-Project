import './footer.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSmileWink } from '@fortawesome/free-regular-svg-icons';


const Footer = () => {

    return (<footer className="footer">
        <section>
            <img className='footerImg' src="../../img/logo-fj.png" alt="logo FJ" />
        </section>
        <section>
            <p>
                Desenvolvido por Felipe Jorge - Alura
            </p>
        </section>
    </footer>)
}

export default Footer;