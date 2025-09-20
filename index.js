document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault(); 

  let email = document.getElementById("email").value; 
  let password = document.getElementById("password").value; 

  if(email === "" || password === ""){
    Swal.fire({
      position: 'top', 
      icon: 'error',
      title: 'Please fill all fields',
      showConfirmButton: false, 
      timer: 2000, 
    });
  } 
  else {
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Login Successful!',
      showConfirmButton: false,
      timer: 2000,
    }).then(() => {
      window.location.href = "home.html";
    });
  }
});