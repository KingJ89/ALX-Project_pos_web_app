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
