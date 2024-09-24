# models.py (Database model for Inventory and Sales)
class Inventory(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    product_name = db.Column(db.String(100), nullable=False)
    stock = db.Column(db.Integer, nullable=False)

class SalesRecord(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey('inventory.id'))
    quantity_sold = db.Column(db.Integer, nullable=False)
    sale_date = db.Column(db.DateTime, default=datetime.utcnow)

# app.py (Function to update inventory)
@app.route('/sell/<int:product_id>', methods=['POST'])
def sell_item(product_id):
    product = Inventory.query.get_or_404(product_id)
    quantity_sold = request.json.get('quantity_sold')

    if product.stock >= quantity_sold:
        # Update stock
        product.stock -= quantity_sold
        # Log the sale in the SalesRecord
        new_sale = SalesRecord(product_id=product.id, quantity_sold=quantity_sold)
        db.session.add(new_sale)
        db.session.commit()
        return jsonify({"message": "Sale successful, inventory updated"}), 200
    else:
        return jsonify({"error": "Not enough stock"}), 400

