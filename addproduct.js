let form = document.getElementById("productForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let price = document.getElementById("price").value.trim();
  let image = document.getElementById("image").value.trim();
  let description = document.getElementById("description").value.trim();

  if (!name || !price || !image || !description) {
    Swal.fire("Error", "Please fill in all fields!", "error");
    return;
  }

  let products = JSON.parse(localStorage.getItem("products")) || [];

  let newProduct = {
    id: Date.now(),
    name: name,
    price: price,
    image: image,
    description: description
  };

  products.push(newProduct);

  localStorage.setItem("products", JSON.stringify(products));

  Swal.fire("Success", "Product added successfully!", "success");

  form.reset();
});
