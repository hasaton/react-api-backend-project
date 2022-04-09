import React from 'react';
import './Homepage.css'
import Studyimg from '../../images/Studying.jpg'
import CoursesPage from '../Homepages/CoursesPage';
const Homepage = () => {
    return ( 
        <>
        <section className="homepage">
            <div className="topleft-baner">
                
                    <article className="topleft-article">
                        <h1>Bądź zawsze na bieżąco</h1>
                        <p>Rozwijaj się dzięki najnowszym umiejętnościom już od 59,99 zł. Promocja kończy się dziś!</p>
                    </article>
                
                <div className="right">
                    <img src={Studyimg} alt="Studying person" className="topleft-img" />
                </div>
            </div>
        </section>
        <CoursesPage/>
        </>
     );
}
 
export default Homepage;