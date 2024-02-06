AOS.init({
  offset: 120,
  delay: 0,
  duration: 2000,
  easing: 'ease',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',
});

console.log("Before fetch request");
fetch("https://api.web3forms.com/submit", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  },
  body: json
})
  .then(async (response) => {
    console.log("Inside fetch .then");
    let json = await response.json();
    if (response.status == 200) {
      console.log("Success:", json);
      result.innerHTML = json.message;
      result.classList.remove("text-gray-500");
      result.classList.add("text-green-500");
    } else {
      console.log("Error:", response);
      result.innerHTML = json.message;
      result.classList.remove("text-gray-500");
      result.classList.add("text-red-500");
    }
  })
  .catch((error) => {
    console.log("Fetch error:", error);
    result.innerHTML = "Something went wrong!";
  })
  .then(function () {
    console.log("After fetch request");
    form.reset();
    setTimeout(() => {
      result.style.display = "none";
    }, 5000);
  });


  function showPasswordPrompt() {
    var password = prompt("Enter the password:");
    
    // simpel wachtwoord
    if (password === '088901@glr.nl') {
      window.location.href = 'resources/images/cv.png';
    } else {
      alert("Incorrect password. Please try again.");
    }
  }