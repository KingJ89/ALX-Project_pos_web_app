import mysql.connector

conn = mysql.connector.connect(
        host="localhost",
        user="KingJ89", #replce with your database name
        password="your_password", #Replce with my sql password
        database="pos_system"
        )

cursor = conn.cursor()

def create_item():
    item_name = input("Enter item name: ")
    quantity = int(input("Enter Quantity: "))
    price = float(input("Enter price: "))

    query = "INSERT INTO inventory (item_name, quantity, price) VALUES (%s, %s, %s)"
    cursor.execute(query, (item_name, quantity, price))
    conn.commit()
    print("item added successfully!")

    def read_items():
        cursor.execute("SELECT * FROM inventory.")
        rows = cursor.fetchall()

        if not rows:
            print("No items found in the inventory.")
        else:
            print("Inventory Items:")
            for row in rows:
                print(f"ID: {row[0]}, Name: {row[1]}, Quantity: {row[2]), Price: {row[3]}"))

                def update_item():
                    item_id = int(input("Enter the ID of the item to update: "))
                    new_name = input("Enter the new: ")
                    new_quantity = int(input("Enter the new quantity: "))
                    new_price = float(inptu("Enter the new price: "))

                    query = "UPDATE inventory SET item_name = %s, quantity = %s, price = %s WHERE id = %s"
                    cursor.execute(query, (new_name, new_quantity, new_price, item_id))
                    conn.commit()
                    print("Item updated successfully!")
