window.onload = function () {
  let signed = document.querySelector(".signed");
  let notSigned = document.querySelector(".notSigned");
  if (localStorage.getItem("token")) {
    notSigned.classList.add("hidden");
  } else {
    signed.classList.add("hidden");
  }
};

function signOut() {
  localStorage.removeItem("token");
  window.location.href = "../index.html";
}


function sendData() {
  let fName = document.getElementById("first-name").value;
  let lName = document.getElementById("last-name").value;
  let fullName = fName + " " + lName;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone-number").value;
  let message = document.getElementById("message").value;

  if (!fName || !lName || !email || !phone || !message) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Enter valid and complete data!",
    });
  } else {
    const data = { fullName, email, phone, message };
    localStorage.setItem("data", JSON.stringify(data));
    Swal.fire({
      icon: "success",
      title: "Message sent successfully!",
    }).then(() => {
      document.getElementById("first-name").value = "";
      document.getElementById("last-name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone-number").value = "";
      document.getElementById("message").value = "";
    });
  }
}
