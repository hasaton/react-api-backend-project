import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../store/StoreProvider';
import './Aside.css'
const Aside = () => {
    const {user} = useContext(StoreContext)
        const Asidecontent = user ? <aside><p>Twoje kursy:</p></aside> : null;
    return ( 
        Asidecontent
     );
}
 
export default Aside;