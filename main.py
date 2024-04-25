from storage import StorageUsers

store = StorageUsers()
store.connect()
store.create()
print(store.get_user_by_email('david@gmail.com')[0])