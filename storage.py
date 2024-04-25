import psycopg2
from config import host, user, password, db_name, port


class StorageUsers:
    def __init__(self) -> None:
        self.conn = None

    # Подключение к PostgreSQL
    def connect(self):
        try:
            self.conn = psycopg2.connect(
                host=host, user=user, password=password, dbname=db_name, port=port
            )
            self.cursor = self.conn.cursor()
            self.conn.autocommit = True
            print("[INFO] Connected succesfully")
        except Exception as ex:
            print(f"[INFO] error: {ex}")

    # Создание таблицы
    def create(self):
        try:
            self.cursor.execute(
                "CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, name VARCHAR(50) NOT NULL, email VARCHAR(50) NOT NULL UNIQUE, password VARCHAR(50) NOT NULL UNIQUE, role VARCHAR(10) NOT NULL);"
            )
            print(f"[INFO] Table created succesfully, or is exist already")
        except Exception as ex:
            print(f"[INFO] error: {ex}")

    # Добавление данных в таблицу
    def insert(self, values):
        sqlStatement = (
            "INSERT INTO users (name, email, password, role) VALUES(%s, %s, %s, %s);"
        )
        self.cursor.execute(sqlStatement, (values[0], values[1], values[2], values[3]))
        print(f"[INFO] Values inserted into table succesfully")

    # Обновление данных в таблицу
    def update(self, set_values, condition):
        try:
            sqlStatement = f"UPDATE users SET name = %s, email = %s, password = %s, role = %s WHERE {condition};"
            self.cursor.execute(
                sqlStatement,
                (set_values[0], set_values[1], set_values[2], set_values[3]),
            )
            print(f"[INFO] Data updated in table succesfully")
        except Exception as ex:
            print(f"[INFO] error: {ex}")

    # Удаление данных из таблицы
    def delete(self, condition):
        try:
            sqlStatement = f"DELETE FROM users WHERE {condition[0]} = %s;"
            self.cursor.execute(sqlStatement, (condition[1],))
            print(f"[INFO] Data deleted from table succesfully")
        except Exception as ex:
            print(f"[INFO] error: {ex}")

    # Закрытие подключения к PostgreSQL
    def close(self):
        try:
            self.conn.close()
            print(f"[INFO] Connection closed succesfully")
        except Exception as ex:
            print(f"[INFO] error: {ex}")

    # Очищение таблицы
    def truncate_table(self):
        try:
            sqlStatement = "TRUNCATE TABLE users;"
            self.cursor.execute(sqlStatement)
            print(f"[INFO] Table truncated succesfully")
        except Exception as ex:
            print(f"[INFO] error: {ex}")
    
    # Получение данных пользователся по email
    def get_user_by_email(self, email):
        sqlStatement = 'SELECT * FROM users WHERE email = %s;'
        self.cursor.execute(sqlStatement, (email, ))
        return self.cursor.fetchone()