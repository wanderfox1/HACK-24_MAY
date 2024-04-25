from flask import Flask, render_template, jsonify, request, redirect, url_for
from flask_cors import CORS
from storage import StorageUsers
from validateFunctions import *
from uuid import uuid4

app = Flask(__name__)
cors = CORS(app, origins='*')

store = StorageUsers()
store.connect()
store.create()

# Маршрут /register к странице авторизации/регистрации
@app.route('/register', methods=['GET'])
def register():
    return render_template('login.html')

# Маршрут /main к главной странице
@app.route('/main', methods=['GET'])
def mainUserPage():
    token = request.args.get('token')
    if not token:
        return render_template('index401.html')
    return render_template('main_user_page.html')

# Маршрут /panel к панели админа
@app.route('/panel', methods=['GET'])
def adminPanel():
   return render_template('admin_panel.html')

# Регистрация
@app.route('/register', methods=['POST'])
def register_user():
    data = request.get_json()

    # Проверка пароля
    if not check_email(data['email']):
        return jsonify({'message': email_invalid_msg})
    # Проверка адреса электронной почты
    if not check_password(data['password']):
        return jsonify({'message': pswd_invalid_msg})

    if data['name'] and data['email'] and data['password']:
        if store.get_user_by_email(data['email']) is None:
            store.insert((data['name'], data['email'], data['password'], 'user')) # Добавление в users
            return jsonify({'message': 'Пользователь успешно зарегистрирован', 'token': uuid4(), 'role': 'user'})
        else:
            return jsonify({'message': 'Пользователь с такой почтой уже существует'})
    else:
        return jsonify({'message': 'Пожалуйста, заполните все поля'})

# Авторизация
@app.route('/login', methods=['POST'])
def login_user():
    data = request.get_json()
    email = data['email']
    password = data['password']
    
    if email == '' and password == '':
        return jsonify({'message': 'Пожалуйста, введите почту и пароль'})
    user = store.get_user_by_email(email)

    if user and user[3] == password:
        role = user[4]
        print(role)
        return jsonify({'message': 'Пользователь успешно авторизован', 'token': uuid4(), 'role': role})
    else:
        return jsonify({'message': 'Неправильная почта или пароль'})

if __name__ == "__main__":
    app.run(debug=True)
