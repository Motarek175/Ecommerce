function getData() {
  const email = document.getElementById("email").value;
  const emailreg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if (!email || !email.match(emailreg)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Enter valid email!",
    });
  } else {
    calling(email);
  }
}

async function calling(email) {
  const response = await fetch(
    "https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    },
  );
  const result = await response.json();
  if (result.statusMsg == "success") {
    Swal.fire({
      icon: "success",
      title: "Code sent successfully",
    }).then(() => {
      localStorage.setItem("email", email);
      window.location.href = "../reset/reset.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: result.message,
    });
  }
}
