import React, {useState}  from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import axios from "axios";
import "../style/index.css";
import logo from '../image/logo.svg';
import { useHistory } from 'react-router-dom';

const CLIENT_ID = '837545693048-2sec522868r9qr8mpbo0bkdi2d638jm1.apps.googleusercontent.com';


const GoogleBtn = () =>  {
    const [isLogined, setIsLogined] = useState(false)
    const [accessToken, setAccessToken] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [imageUrl, setImageUrl] = useState(undefined)
    const history = useHistory();

 const  login = (response) => {
     const {
         profileObj: { name, email, imageUrl },
    } = response;

    if(response.accessToken){
        setIsLogined(true)
        setImageUrl(imageUrl)
        setAccessToken(response.accessToken)   
        setName(name)
        setEmail(email)
        console.log(response);     
    };      
    const data = {
        name: name,
        email: email
    }
    console.log(data)    
    axios.post('http://localhost:8897/googlestorage/save', data);
    window.location = "http://localhost:3000/promocao/promo"
    // history.push = ('promocao/promo');

}

 const logout  = (response) => {
    setIsLogined(false)
    setAccessToken('')

  }

  const handleLoginFailure = (response) => {
    alert('Falha para realizar o login')
  }

  const handleLogoutFailure = (response) => {
    alert('Falha para realizar o logout')
  }

 
    return (
        <>
        <div className="wrapper">
            <img className="logo" src={logo} />
            <h1>Faça a sua autenticação abaixo</h1>
            { isLogined ?
                <GoogleLogout
                clientId={ CLIENT_ID }
                buttonText='Logout do Google'
                onLogoutSuccess={ logout }
                onFailure={ handleLogoutFailure }
                >
                </GoogleLogout>: <GoogleLogin
                clientId={ CLIENT_ID }
                buttonText='Login do Google'
                onSuccess={ login }
                onFailure={ handleLoginFailure }
                cookiePolicy={ 'single_host_origin' }
                responseType='code,token'
                />
            }
            <div style={{display:'block', textAlign: 'center'}}>
                { accessToken ? 
                    <>
                        {/* <h5>Seu Acesso:</h5><br/>
                        <img src={imageUrl} /><br></br>
                        {name } <br></br> 
                        {email}  */}
                    </> : null }
            </div>
        </div>
    </>
    )

}


export default GoogleBtn;