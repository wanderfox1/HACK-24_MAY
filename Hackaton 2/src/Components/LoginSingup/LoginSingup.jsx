import React, { useState } from 'react';
import './LoginSingup.css';
import axios from 'axios';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const LoginSingup = () => {

	const [action, setAction] = useState("Войти");
	const [nameValue, setNameValue] = useState("");
	const [emailValue, setEmailValue] = useState("");
	const [passwordValue, setPasswordValue] = useState("");

	const handleInputChange = (e, field) => {
		const value = e.target.value;
		switch (field) {
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

	const handleRegister = async () => {
		try {
			const response = await axios.post('/register', {
				name: nameValue,
				email: emailValue,
				password: passwordValue
			});
			//console.log(response.data);
			if (response.data.message === "Пользователь успешно зарегистрирован") {
				window.location.href = '/main';
			}
			else {
				alert(response.data.message);
			}
		} catch (error) {
			console.error(error);
		}
	}

	const handleLogin = async () => {
		try {
			const response = await axios.post('/login', {
				email: emailValue,
				password: passwordValue
			});
			console.log(response.data);
			// Проверяем ответ от сервера
			if (response.data.message === 'Неправильная почта или пароль' || response.data.message === 'Пожалуйста, введите почту и пароль') {
				// Выводим сообщение об ошибке, если вход неудачен
				alert(response.data.message);
			}
			if (response.data.message === 'Пользователь успешно авторизован') {
				if (response.data.role === 'admin') {
					window.location.href = '/panel';
				}
				else {
					// Перенаправляем на страницу main_user_page.html при успешном входе и токене
					window.location.href = '/main' + '?token=' + response.data.token;
				}
			}
		} catch (error) {
			console.error(error);
		}
	}


	return (
		<div className='container'>
			<div className="header">
				<div className="text">{action}</div>
				<div className="underline"></div>
			</div>
			<div className="inputs">
				{action === "Войти" ? <div></div> : <div className="input">
					<img src={user_icon} alt='' />
					<input type='text'
						placeholder='Имя'
						value={nameValue}
						onChange={(e) => handleInputChange(e, "name")}
					/>
				</div>}
				<div className="input">
					<img src={email_icon} alt='' />
					<input type='email'
						placeholder='Почта'
						value={emailValue}
						onChange={(e) => handleInputChange(e, "email")}
					/>
				</div>
				<div className="input">
					<img src={password_icon} alt="" />
					<input type='password'
						placeholder='Пароль'
						value={passwordValue}
						onChange={(e) => handleInputChange(e, "password")}
					/>
				</div>
			</div>

			{action === "Регистрация" ? <div></div> : <div className="forgot-password">Забыли свой пароль?<span>Нажмите сюда!</span></div>}
			<div className="submit-container">
				<div className={action === "Войти" ? "submit gray" : "submit"} onClick={() => {
					setAction("Регистрация");
					setNameValue("");
					setEmailValue("");
					setPasswordValue("");
					handleRegister(); // Вызываем функцию handleRegister при нажатии на кнопку "Регистрация"
				}}>Регистрация</div>
				<div className={action === "Регистрация" ? "submit gray" : "submit"} onClick={() => {
					setAction("Войти");
					setEmailValue("");
					setPasswordValue("");
					handleLogin(); // Вызываем функцию handleLogin при нажатии на кнопку "Войти"
				}}>Войти</div>
			</div>
		</div>
	)
}

export default LoginSingup;
