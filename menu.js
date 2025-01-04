function hideElement() {
    const element = document.getElementById('always-visible');
    element.style.display = 'none';
}

function updateOrder() {
    const selectedItems = Array.from(document.querySelectorAll('input[name="food"]:checked'))
        .map(item => item.value);

    const orderTableBody = document.getElementById('order-table-body');
    orderTableBody.innerHTML = "";

    if (selectedItems.length > 0) {
        selectedItems.forEach(item => {
            const row = document.createElement('tr');
            const cell = document.createElement('td');
            cell.textContent = item;
            row.appendChild(cell);
            orderTableBody.appendChild(row);
        });
    } else {
 
        const cell = document.createElement('td');
        cell.textContent = "";
        cell.colSpan = 1;
        row.appendChild(cell);
        orderTableBody.appendChild(row);
    }
}

document.querySelectorAll('input[name="food"]').forEach(checkbox => {
    checkbox.addEventListener('change', updateOrder);
});

function placeOrder() {
    const selectedItems = Array.from(document.querySelectorAll('input[name="food"]:checked'))
        .map(item => item.value);

    if (selectedItems.length > 0) {
        alert(`Your ordered has been placed`);
        
        document.querySelectorAll('input[name="food"]:checked').forEach(checkbox => {
            checkbox.checked = false;
        });

        const orderTableBody = document.getElementById('order-table-body');
        orderTableBody.innerHTML = "";
        updateOrder();
    } else {
        alert('Please select at least one item to place an order.');
    }
}

const order = document.querySelector(".order");
const offsetTop = order.offsetTop;

window.addEventListener("scroll", () => {
    if (window.scrollY >= offsetTop) {
        order.classList.add("sticky");
    } else {
        order.classList.remove("sticky");
    }
});