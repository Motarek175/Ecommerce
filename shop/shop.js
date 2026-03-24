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
