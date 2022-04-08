import React, { useContext, useState } from 'react';
import Button from '../header/Button';
import './LoginPage.css'
import { StoreContext } from '../../store/StoreProvider';
import request from '../../helpers/request';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
  const { setUser} = useContext(StoreContext)
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [validateMessage, setValidateMessage] = useState('')
  let navigation = useNavigate()

  const handleLogin = (e) => setLogin(e.target.value)
  const handlePassword= (e) => setPassword(e.target.value)
  const handleOnSubmit = async (e) => {
    e.preventDefault()
    const { data, status} = await request.post(
      '/users',
      {login, password}
    );
    if(status === 200) {
      setUser(data.user);
      setLogin('');
      setPassword('');
      navigation('/', {replace: true})
      console.log(data)
    }
    else {
      setValidateMessage(data.message)
    }
  }
  const validateMessageComponent = validateMessage.length > 0 ? <p style={{color: 'red', marginBottom: '2%'}}>{validateMessage}</p> :  null
    return ( 
        <>
        <section className="login-wrapper">
              <form onSubmit={handleOnSubmit} method="post">
            <section className="login-section-wrapper">
              <section className="login-section">
              <p>Login</p>
              <input type="text" placeholder='login' value={login} onChange={handleLogin} />
              </section>
            <section className="login-section">
              <p>Password</p>
              <input type="password" placeholder='Password' value={password} onChange={handlePassword} />
            </section>
            {validateMessageComponent}
            <Button login={true} />
            </section>
            </form>
        </section>
        </>
     );
}
 
export default LoginPage;