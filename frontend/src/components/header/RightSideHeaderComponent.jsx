import './RightSideHeaderComponent.css'
import { StoreContext } from "../../store/StoreProvider";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
const RightSideHeaderComponent = () => {
    const {user} = useContext(StoreContext)
    const navigate = useNavigate()
    const showCourses = () => navigate('/userCourses', {replace: true})
    const showSettings = () => navigate('/settings', {replace: true})
    return  ( 
        <>
        <section className="rightSideHeader">
        <span className="userCourses" onClick={showCourses}>Moje kursy</span>
        <span className="settings" onClick={showSettings}>Ustawienia</span>
        <span className="money">{user.budget}zl</span>
        </section>
        </>
     );
}
 
export default RightSideHeaderComponent;