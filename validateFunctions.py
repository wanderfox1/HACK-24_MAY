import re
pswd_pattern = re.compile("^(?=.*?[a-z])(?=.*?[0-9])[A-Za-z\d]{8,20}$")
email_pattern = re.compile("^[a-zA-Z0-9.!#$%&'*+/=?^`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")
pswd_invalid_msg = "Пароль должен состоять из минимум 8ми символов и содержать хотя бы одну в нижнем регистре и цифру"
email_invalid_msg = "Введенный адрес почты некорректен"

def check_password(password):
    if not pswd_pattern.fullmatch(password):
         return False
    else: 
         return True

def check_email(email):
    if not email_pattern.fullmatch(email):
         return False
    else: 
         return True