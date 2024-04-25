import React, { useState } from 'react';
import './Loginsingup.css';

import user_icon from './person.png';
import email_icon from './email.png';
import password_icon from './password.png';


const Loginsingup = () => {

const [action, setAction] = useState("Войти");
const [nameValue, setNameValue] = useState("");
const [emailValue, setEmailValue] = useState("");
const [passwordValue, setPasswordValue] = useState("");

const handleInputChange = (e, field) => {
	const value = e.target.value;
	switch (field){
		case "name":
			setNameValue(value);
			break;
		case "email":
			setEmailValue(value);
			break;
		case "password":
			setPasswordValue(value);
			break;
		default:
			break;
	}
}

return (
	<div className='container'>
	  <div className="header">
		<div className="text">{action}</div>
		<div className="underline"></div>
	  </div>
	  <div className="inputs">
	  	{action==="Войти"?<div></div>: <div className="input">
			<img src={user_icon} alt=''/>
			<input type='text' 
			placeholder='Имя'
			value={nameValue}
			onChange={(e) => handleInputChange(e, "name")}
			/>
		</div>}
		<div className="input">
			<img src={email_icon} alt=''/>
			<input type='email' 
			placeholder='Почта' 
			value={emailValue}
			onChange={(e) => handleInputChange(e, "email")}
			/>
		</div>
		<div className="input">
			<img src={password_icon} alt=""/>
			<input type='password' 
			placeholder='Пароль'
			value={passwordValue}
			onChange={(e) => handleInputChange(e, "password")}
			/>
		</div>
	  </div>
	  
	  {action==="Регистрация"?<div></div>: <div className="forgot-password">Забыли свой пароль?<span>Нажмите сюда!</span></div>}
	  	<div className="submit-container">
	  		<div className={action === "Войти" ? "submit gray" : "submit"} onClick={()=>{setAction("Регистрация");setNameValue(""); setEmailValue("");setPasswordValue("");}}>Регистрация</div>
			<div className={action === "Регистрация" ? "submit gray" : "submit"} onClick={()=>{setAction("Войти");setEmailValue("");setPasswordValue("");}}>Войти</div>
		</div>
	</div>
  )
}

export default Loginsingup;