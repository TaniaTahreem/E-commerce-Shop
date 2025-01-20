
document.getElementById("checkoutForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    // Validate fields
    const address = document.getElementById("address").value.trim();
    const city = document.getElementById("city").value.trim();
    const postalCode = document.getElementById("postalCode").value.trim();
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
  
    if (!address || !city || !postalCode || !paymentMethod) {
        alert("Please fill all the fields correctly!");
        return;
    }
  
    if (!/^\d{5}$/.test(postalCode)) {
        alert("Postal Code must be 5 digits!");
        return;
    }
  
    // If everything is valid, display a confirmation
    alert("Purchase confirmed! Redirecting to the order confirmation page...");
    window.location.href = "confirmation.html";
  });
  
  
  

    
    // const paymentMethods = document.querySelectorAll('input[name="payment-method"]');
    // const creditFields = document.getElementById('credit-fields');

    // paymentMethods.forEach(method => {
    //     method.addEventListener('change', () => {
    //         if (method.id === 'credit') {
    //             creditFields.classList.remove('hidden');
    //         } else {
    //             creditFields.classList.add('hidden');
    //         }
    //     });
    // });
  

    
  
  