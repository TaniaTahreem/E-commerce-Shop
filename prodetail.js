const products = [
    {
        id: 1,
        name: "GoPro HERO6 4K Action",
        description:"",
        rating: 4.3,
        color: "Black",
        thumbnails: [
            "image-1 (1).jpeg",
            "image-1 (14).jpeg",
            "image-1 (13).jpeg",
        ]
    },
    {
        id: 2,
        price: 456.50 , 
        discount: 1128.00,
        rating: 4.3,
        image: "image-1 (2).jpeg",
        name: "GoPro HERO6 4K Action",
        color: "Gray",
        thumbnails: [
            
            "image-1 (15).jpeg",
            "image-1 (2).jpeg",
           "image-1 (16).jpeg",
        ]
    },
    {
        id: 3,
        price: 99.50 , 
        discount: 1128.00,
        rating: 4.3,
        image: "image-1 (3).jpeg",
        name: "WGoPro HERO6 4K Action",
        color: "gray",
        thumbnails: [
            "image-1 (1).jpeg",
            "image-1 (15).jpeg",
            "image-1 (3).jpeg",
        ]
    },
    {
        id: 4,
        price: 99.50 , 
        discount: 1128.00,
        rating: 4.3,
        image: "image-1 (4).png",
        name: "GoPro Camera 4K Action",
        color: "Black",
        thumbnails: [
            "image-1 (17).jpeg",
            "image-1 (4).png",
            "image-1 (13).jpeg",
        ]
    },
    {
        id: 5,
        price: 99.50 , 
        discount: 1128.00,
        rating: 4.3,
        image: "image-1 (5).webp",
        name: "GoPro HERO6 4K Action",
        color: "Black",
        thumbnails: [
            "image-1 (5).webp",
            "image-1 (4).png",
            "image-1 (17).jpeg",
        ]
    },
    {
        id: 6,
        price: 99.50 , 
        discount: 1128.00,
        rating: 4.3,
        image: "image-1 (6).jpeg",
        name: "GoPro HERO6 4K Action",
        color: "Black",
        thumbnails: [
            "image-1 (6).jpeg",
            "image-1 (7).jpeg",
            "image-1 (6).jpeg",
        ]
    },
    {
        id: 7,
        price: 99.50 , 
        discount: 1128.00,
        rating: 4.3,
        image: "image-1 (7).jpeg",
        name: "GoPro HERO6 4K Action",
        color: "Black",
        thumbnails: [
            "image-1 (7).jpeg",
            "image-1 (7).jpeg",
            "image-1 (7).jpeg",
        ]
    },
    {
        id: 8,
        price: 99.50 , 
        discount: 1128.00,
        rating: 4.3,
        image: "image-1 (8).png",
        name: "GoPro HERO6 4K Action",
        color: "Black",
        thumbnails: [
            "image-1 (8).png",
            "image-1 (8).png",
            "image-1 (8).png",
        ]
    },
    {
        id: 9,
        price: 99.50 , 
        discount: 1128.00,
        rating: 4.3,
        image: "image-1 (9).jpeg",
        name: "GoPro HERO6 4K Action",
        color: "Black",
        thumbnails: [
            "image-1 (9).jpeg",
            "image-1 (10).jpeg",
            "image-1 (11).jpeg",
        ]
        
    },
   
    {
        id: 10,
        price: 99.50 , 
        discount: 1128.00,
        rating: 4.3,
        image: "image-1 (10).jpeg",
        name: "GoPro HERO6 4K Action",
        color: "Black",
        thumbnails: [
            "image-1 (9).jpeg",
            "image-1 (10).jpeg",
            "image-1 (11).jpeg",
        ]
    },
    {
        id: 11,
        price: 99.50 , 
        discount: 1128.00,
        rating: 4.3,
        image: "image-1 (11).jpeg",
        name: "GoPro HERO6 4K Action",
        color: "Black",
        thumbnails: [
            "image-1 (9).jpeg",
            "image-1 (10).jpeg",
            "image-1 (11).jpeg",
        ]
    },
    {
        id: 12,
        price: 99.50 , 
        discount: 1128.00,
        rating: 4.3,
        image: "image-1 (12).jpg",
        name: "GoPro HERO6 4K Action",
        color: "Black",
        thumbnails:
        [
            "image-1 (12).jpg",
            "image-1 (12).jpg",
            "image-1 (12).jpg",
        ]
        },
    {
        id: 13,
        price: 99.50 , 
        discount: 1128.00,
        rating: 4.3,
        image: "image-1 (13).jpeg",
        name: "GoPro HERO6 4K Action",
        color: "Black",
        thumbnails: [
            "image-1 (14).jpeg",
            "image-1 (1).jpeg",
            "image-1 (13).jpeg",
        ]
    },
    {
        id: 14,
        price: 99.50 , 
        discount: 1128.00,
        rating: 4.3,
        image: "image-1 (14).jpeg",
        name: "GoPro HERO6 4K Action",
        color: "Black",
        thumbnails: [
            "image-1 (14).jpeg",
            "image-1 (1).jpeg",
            "image-1 (13).jpeg",
        ]
    },
    {
        id: 15,
        price: 99.50 , 
        discount: 1128.00,
        rating: 4.3,
        image: "image-1 (15).jpeg",
        name: "GoPro HERO6 4K Action",
        color: "Black",
        thumbnails: [
            "image-1 (15).jpeg",
            "image-1 (2).jpeg",
            "image-1 (16).jpeg",
        ]
    },
    {
        id: 16,
        price: 99.50 , 
        discount: 1128.00,
        rating: 4.3,
        image: "image-1 (16).jpeg",
        name: "GoPro HERO6 4K Action",
        color: "Black",
        thumbnails: [
            "image-1 (15).jpeg",
            "image-1 (2).jpeg",
            "image-1 (16).jpeg",
        ]
    },
    

];
  

  function renderProductDetails() {
    const product = JSON.parse(localStorage.getItem("product"));
    if (!product) return;
  
    document.getElementById("main-image").src = product.image;
    document.getElementById("product-title").innerText = product.title;
    document.getElementById("product-description").innerText = product.description;
    document.getElementById("product-price").innerText = product.price;
  
    const thumbnails = document.getElementsByClassName("image-thumbnails");
    thumbnails.innerHTML = "";
    product.thumbnails.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      img.onclick = () => (document.getElementById("main-image").src = src);
      thumbnails.appendChild(img);
    });
  
    const relatedProducts = document.getElementById("related-products");
    relatedProducts.innerHTML = "";
    products
      .filter(p => p.id !== product.id)
      .forEach(p => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
          <h3>${p.title}</h3>
          <p>${p.price}</p>
          <p>${p.name}</p>
          <p>${p.color}</p>
        `;
        card.onclick = () => {
          localStorage.setItem("product", JSON.stringify(p));
          window.location.href = "productdetail.html";
        };
        relatedProducts.appendChild(card);

      });
  }
  
  function addToCart() {
    // Get product details
    const productImage = document.getElementById('main-image').src;
    const productTitle = document.querySelector('.product-title').textContent.trim();
    const productPrice = document.querySelector('.discounted-price').textContent.trim();
    const quantity = document.getElementById('quantity').value;

    // Create an order summary object
    const order = {
        image: productImage,
        title: productTitle,
        price: productPrice,
        quantity: parseInt(quantity),
    };

    // Store order details in localStorage
    localStorage.setItem('orderSummary', JSON.stringify(order));

    // Redirect to checkout page
    window.location.href = "checkout.html";
}

 
  document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('currentImage');
    const decreaseBtn = document.getElementById('decrease');
    const increaseBtn = document.getElementById('increase');
    const quantityInput = document.getElementById('quantity');
  
    // Thumbnail click to change main image
    thumbnails.forEach(thumb => {
      thumb.addEventListener('click', () => {
        mainImage.src = thumb.src;
      });
    });
      // Quantity selector
      decreaseBtn.addEventListener('click', () => {
        if (quantityInput.value > 1) {
          quantityInput.value--;
        }
      });
    
      increaseBtn.addEventListener('click', () => {
        quantityInput.value++;
      });
    });
    // Change main image on thumbnail click
    function changeImage(src) {
      document.getElementById('main-image').src = src;
    }



  document.addEventListener("DOMContentLoaded", renderProductDetails);
  