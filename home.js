 const heroSwiper = new Swiper('.hero-swiper', {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });




function addToCart(name, price, image) {
  const product = {
    name: name,
    price: price,
    image: image,
    quantity: 1
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingProduct = cart.find(item => item.name === name);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Product added to cart!");
}



  document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.flip-card-front img');

    images.forEach(img => {
      const card = img.closest('.flip-card');

      img.addEventListener('mouseenter', () => {
        card.classList.add('hovered');
      });

      img.addEventListener('mouseleave', () => {
        card.classList.remove('hovered');
      });
    });
  });


