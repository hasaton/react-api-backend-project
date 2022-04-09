
import { useContext } from 'react';
import { StoreContext } from '../../store/StoreProvider';
import Button from '../header/Button';

import './footer.css'


const Footer = () => {
    const {user} = useContext(StoreContext)
    return ( 
        <footer>
            <section className="top-footer">
                <div>
                    <h1>Zmieniaj świat, ucząc sie przez internet</h1>
                    <p>Kup internetowy kurs wideo, dotrzyj do uczestników na całym świecie i zdobywaj wiedze</p>
                </div>
                <Button/>
            </section>
        </footer>
     );
}
 
export default Footer;