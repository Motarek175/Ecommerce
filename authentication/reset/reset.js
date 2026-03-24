function getData() {
  const inputs = document.querySelectorAll("input");
  let otpCode = "";
  inputs.forEach((input) => {
    if (!input.value) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Enter valid OTP!",
      });
    } else {
      otpCode += input.value;
    }
  });
  calling(otpCode);
}

async function calling(otpCode) {
  const response = await fetch(
    "https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ resetCode: otpCode }),
    },
  );
  const result = await response.json();
  if (result.status == "Success") {
    Swal.fire({
      icon: "success",
      title: "Code verified successfully",
    }).then(() => {
      window.location.href = "../newPassword/newPassword.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: result.message,
    });
  }
}

async function reSend() {
  const email = localStorage.getItem("email");
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
      title: "Email sent successfully",
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: result.message,
    });
  }
}
