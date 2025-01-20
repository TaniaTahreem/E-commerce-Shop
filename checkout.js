
document.addEventListener('DOMContentLoaded', () => {
  // Get order summary from localStorage
  const orderSummary = JSON.parse(localStorage.getItem('orderSummary'));

  if (orderSummary) {
      const { image, title, price, quantity } = orderSummary;

      // Update the checkout page with product details
      document.getElementById('product-name').textContent = title;
      document.getElementById('product-price').textContent = price;
      document.getElementById('product-quantity').textContent = quantity;
      document.getElementById('total-price').textContent = 
          `$${(parseFloat(price.replace('$', '')) * quantity).toFixed(2)}`;
          // Set the product image
        const productImageElement = document.getElementById('product-image');
        productImageElement.src = image; // Set the same image as displayed on the product page
        productImageElement.alt = title; // Add an alt attribute for accessibility
  }
});

// Handle "Place Order" button
document.getElementById('place-order').addEventListener('click', () => {
  alert('Order placed successfully!');
  localStorage.removeItem('orderSummary'); // Clear order data
  window.location.href = "placeorder.html"; // Redirect to a confirmation page
});


