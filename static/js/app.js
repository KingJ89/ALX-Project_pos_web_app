document.addEventListener('DOMContentLoaded', function() {
    fetchItems();
    document.getElementById('add-item-form').addEventListener('submit', addItem);
});

function fetchItems() {
    fetch('/api/items')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#inventory-table tbody');
            tableBody.innerHTML = '';
            data.forEach(item => {
                const row = document.createElement('tr');
		    row.innerHTML = `
		<td>${item.id}</td>
		<td>${item.name}</td>
		<td>${item.quantity}</td>
		<td>${item.price}</td>
		    <td>
                        <button onclick="editItem(${item.id})">Edit</button>
                        <button onclick="deleteItem(${item.id})">Delete</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        });
}
	function addItem(event) {
    event.preventDefault();
    const itemName = document.getElementById('item-name').value;
    const itemQuantity = document.getElementById('item-quantity').value;
    const itemPrice = document.getElementById('item-price').value;

    fetch('/api/items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: itemName,
            quantity: itemQuantity,
            price: itemPrice,
        }),
    })
    .then(response => response.json())
    .then(data => {
        fetchItems();
    });
    }

    function deleteItem(itemId) {
    fetch(`/api/items/${itemId}`, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {
        fetchItems();
    });
}

function editItem(itemId) {
    // Logic to edit item (similar to addItem) but using PUT method
}
