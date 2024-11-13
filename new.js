function updateTotal() {
    const pricePerItem = 15;
    const quantity = document.getElementById("quantity").value;
    const totalPrice = pricePerItem * quantity;
    document.getElementById("total-price").innerText = totalPrice;
}