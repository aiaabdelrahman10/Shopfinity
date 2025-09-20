let products = [
  { id: 1, name: "Laptop", price: 15000, image: "https://media.istockphoto.com/id/1394988455/photo/laptop-with-a-blank-screen-on-a-white-background.jpg?s=612x612&w=0&k=20&c=BXNMs3xZNXP__d22aVkeyfvgJ5T18r6HuUTEESYf_tE=", description: "High performance laptop for work and gaming." },
  { id: 2, name: "Headphones", price: 500, image: "https://media.istockphoto.com/id/1412240771/photo/headphones-on-white-background.jpg?s=612x612&w=0&k=20&c=DwpnlOcMzclX8zJDKOMSqcXdc1E7gyGYgfX5Xr753aQ=", description: "Comfortable over-ear headphones with deep bass." },
  { id: 3, name: "Smartphone", price: 8000, image: "https://media.istockphoto.com/id/1050213200/photo/modern-touchscreen-smartphone.jpg?s=612x612&w=0&k=20&c=icudonUGFGNWONLNlqJEAOWisIEfAplF1Mx7_hnIp58=", description: "Latest smartphone with high-resolution display." },
  { id: 4, name: "Watch", price: 1200, image: "https://media.istockphoto.com/id/1180244659/photo/luxury-watch-isolated-on-white-background-with-clipping-path-for-artwork-or-design-black.jpg?s=612x612&w=0&k=20&c=yeFNfkQmcVV9BTUlZO8vY_oLOQgDAt23LfCbF1e3fbI=", description: "Stylish analog watch with leather strap." },
  { id: 5, name: "Tablet", price: 6000, image: "https://media.istockphoto.com/id/1072054370/photo/studio-shot-of-new-apple-ipad-pro-2018-space-gray-color-display-home-and-lock-screen-and-logo.jpg?s=612x612&w=0&k=20&c=LHN4iu6jp5uowkwZzjSUvEJVCXuyfrqp2ZHiynzdlnk=", description: "Portable tablet with high-resolution screen." },
  { id: 6, name: "Camera", price: 10000, image: "https://media.istockphoto.com/id/1156218302/photo/top-view-of-vintage-cameras-on-white-background.jpg?s=612x612&w=0&k=20&c=LBHmMbv1VoBPaynZ1v9ho6vUU-2jhxh1IZ2toXBJ0js=", description: "Professional DSLR camera for photography." },
  { id: 7, name: "Keyboard", price: 700, image: "https://media.istockphoto.com/id/1152881215/photo/wireless-bluetooth-computer-keyboard.jpg?s=612x612&w=0&k=20&c=f3JeroAaBNp9tdXaeQmsWMj1XBVkUAZmCzmQY-XWm0w=", description: "Mechanical keyboard with RGB lighting." },
  { id: 8, name: "Mouse", price: 300, image: "https://media.istockphoto.com/id/1458492520/photo/black-wireless-computer-mouse-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=hLFS1ukv567H6S-7NjQzvVxNKb7qPkvIKbXkT7Sd2r8=", description: "Ergonomic mouse with fast response." },
  { id: 9, name: "Speaker", price: 1500, image: "https://media.istockphoto.com/id/1059154330/photo/boombox.jpg?s=612x612&w=0&k=20&c=AYwVrPpREeFXXP0j8rC8R3eF_9WUVghBXPndGqZYSJw=", description: "Bluetooth speaker with powerful bass." },
  { id: 10, name: "TV", price: 20000, image: "https://media.istockphoto.com/id/1395191574/photo/black-led-tv-television-screen-blank-isolated.jpg?s=612x612&w=0&k=20&c=ps14JZJh0ebkINcbQyHFsR1J5EC7ozkj_WO7Fh_9IOI=", description: "4K Smart TV with vivid colors." },
  { id: 11, name: "Printer", price: 2500, image: "https://media.istockphoto.com/id/866925484/photo/compact-printer-isolated.jpg?s=612x612&w=0&k=20&c=w7LK3UQhKzKMzRmtmBeHbZI5rGgUo85goL0VwU6fy3o=", description: "All-in-one printer for home and office." },
  { id: 12, name: "Microwave", price: 1800, image: "https://media.istockphoto.com/id/182915079/photo/microwave-oven.jpg?s=612x612&w=0&k=20&c=dbSOoDz0KBawI7wxXkhm3DxuYfK0O6WLiwdx1xu4KhU=", description: "Compact microwave oven with grill option." },
  { id: 13, name: "Fridge", price: 12000, image: "https://media.istockphoto.com/id/489936720/photo/home-refrigerator-silver-home-fridge.jpg?s=612x612&w=0&k=20&c=JvVc22-0CU03VuBakgtMLm_oRZeqSKV7es1NGl1a2yA=", description: "Energy efficient double-door refrigerator." },
  { id: 14, name: "Air Conditioner", price: 14000, image: "https://media.istockphoto.com/id/586057100/photo/split-air-conditioner-on-a-white-wall.jpg?s=612x612&w=0&k=20&c=SxC6sw5tZvTUvzRWGKCRCaKXqaxYn-U96CvIZShO3d0=", description: "Split AC with fast cooling technology." },
  { id: 15, name: "Fan", price: 600, image: "https://media.istockphoto.com/id/174400526/photo/spinning-electric-fan.jpg?s=612x612&w=0&k=20&c=HlpAgZMIslM2SQX4NE5Ib6KbGd6nyNCnFhmZuVzJWdo=", description: "Ceiling fan with silent operation." },
  { id: 16, name: "Shoes", price: 900, image: "https://media.istockphoto.com/id/1249496770/photo/running-shoes.jpg?s=612x612&w=0&k=20&c=b4MahNlk4LH6H1ksJApfnlQ5ZPM3KGhI5i_yqhGD9c4=", description: "Comfortable running shoes for daily wear." },
  { id: 17, name: "Bag", price: 450, image: "https://media.istockphoto.com/id/182157353/photo/laptop-in-a-bag.jpg?s=612x612&w=0&k=20&c=bkwyNNYFWgLkB9C9bNPnjHzyBe-Bkn-k6JDL6steEp4=", description: "Stylish backpack with laptop compartment." },
  { id: 18, name: "Sunglasses", price: 350, image: "https://media.istockphoto.com/id/905125152/photo/aviator-sunglasses-isolated.jpg?s=612x612&w=0&k=20&c=cdqPJ4vSrfUIchpphcjjduMtjgPKrN_RGC5hEHtaJ68=", description: "UV-protected stylish sunglasses." },
  { id: 19, name: "Perfume", price: 800, image: "https://media.istockphoto.com/id/2172836783/photo/a-chic-bottle-with-a-gold-cap-of-cosmetic-perfume-on-an-abstract-marble-background-top-view.jpg?s=612x612&w=0&k=20&c=eu13oSR450r5ZoxhwB-lxnAQsk80vBvdtTKV_H-bEhc=", description: "Long-lasting fragrance for all occasions." },
  { id: 20, name: "Ring", price: 2000, image: "https://media.istockphoto.com/id/511646917/photo/golden-diamond-ring-and-contemporary-diamond.jpg?s=612x612&w=0&k=20&c=69CbeMNEwZso5PBbwpPBzPZpO243ZHAAT5QoOHKpGrU=", description: "Elegant silver ring with unique design." }
];



let container = document.getElementById("products-container");

function displayProducts() {
  container.innerHTML = ""; 

  products.forEach((product, index) => {
    createCard(product, index, products);
  });

  let storedProducts = JSON.parse(localStorage.getItem("products")) || [];
  storedProducts.forEach((product, index) => {
    createCard(product, index, storedProducts, true);
  });
}

function createCard(product, index, sourceArray, isLocal = false) {
  let card = document.createElement("div");
  card.classList.add("card");


  let imgContainer = document.createElement("div");
  imgContainer.classList.add("product-image-container");

  let img = document.createElement("img");
  img.src = product.image;

  let description = document.createElement("div");
  description.classList.add("product-description");
  description.textContent = product.description;

  imgContainer.appendChild(img);
  imgContainer.appendChild(description);

  let name = document.createElement("h3");
  name.textContent = product.name;

  let price = document.createElement("p");
  price.textContent = product.price + " EGP";


let ratings = [4.6, 3.2, 1.5, 4.9, 2.8, 4.1, 3.7, 2.5, 3.0, 4.3, 2.0, 1.8, 3.5, 4.0, 2.9, 3.8, 4.2, 2.3, 1.7, 4.7];
let ratingValue = ratings[index % ratings.length]; 

let ratingDiv = document.createElement("div");
ratingDiv.classList.add("simple-rating");
ratingDiv.innerHTML = `<i class="fas fa-star"></i> ${ratingValue.toFixed(1)}`;



  let addBtn = document.createElement("button");
  addBtn.textContent = "Add to Cart";
  addBtn.classList.add("btn", "add-btn");
  addBtn.addEventListener("click", () => addToCart(product));


  let removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("btn", "remove-btn");

  removeBtn.addEventListener("click", () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to remove this product?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e53935",
      cancelButtonColor: "#555",
      confirmButtonText: "Yes, remove it!"
    }).then((result) => {
      if (result.isConfirmed) {
        sourceArray.splice(index, 1); 
        if (isLocal) {
          localStorage.setItem("products", JSON.stringify(sourceArray));
        }
        displayProducts(); 
        Swal.fire("Removed!", "The product has been removed.", "success");
      }
    });
  });


  card.appendChild(imgContainer);
  card.appendChild(name);
  card.appendChild(price);
  card.appendChild(ratingDiv);
  card.appendChild(addBtn);
  card.appendChild(removeBtn);

  container.appendChild(card);
}


function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];


  const existing = cart.find(p => p.id === product.id);
  if(existing){
    existing.quantity += 1;
  } else {
    cart.push({...product, quantity: 1});
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  Swal.fire({
    icon: "success",
    title: "Added to Cart",
    text: `${product.name} has been added to your cart!`,
    showConfirmButton: false,
    timer: 1500
  });
}

displayProducts();
