import React, { useContext } from 'react';
import './Course.css'
import { StoreContext } from '../../store/StoreProvider';
import request from '../../helpers/request';
import { useNavigate } from 'react-router-dom';

const Course = ({authors, img, price, title, id, alreadyBought}) => {
    const allAuthors = authors.join(', ')
    const  {user, setUser, } = useContext(StoreContext)
    const navigation = useNavigate()
    const handleBuyCourse = async () => {
        const  { data, status} = await request.patch(
            '/users',
            {
                login: user.login,
                courseId: id,
            }
        )
        if(status===202)
        {
            setUser(data.user)
        }
    }
    const navigateToMainPage = () => navigation('/loginpage', {replace: true})

    const isUserLoggedHandleEvent = user ? handleBuyCourse : navigateToMainPage

    const isBoughtButtons = 
    alreadyBought 
    ? 
    null
    : 
    <button className='buy-button' onClick={isUserLoggedHandleEvent}>Kup kurs</button>

    return ( 
        <section className="course-container">
            <img src={img} alt={title} className="course-img" />
            <h4>{title}</h4>
           
            <p>{allAuthors}</p>
            <p>{price} zl {isBoughtButtons}</p>
        </section>
     );
}
 
export default Course;