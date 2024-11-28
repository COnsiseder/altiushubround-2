// Function for Sign In
function signIn() {
  const username = document.getElementById("uname").value;
  const password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Username and password must not be empty!");
    return;
  }

  // Send login request to the server
  authenticateUser(username, password, "login");
}

// Function for Sign Up
function signUp() {
  const username = document.getElementById("uname").value;
  const password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Username and password must not be empty!");
    return;
  }

  // Send signup request to the server
  authenticateUser(username, password, "signup");
}

// Function to handle user authentication
function authenticateUser(username, password, action) {
  fetch(`/${action}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert(
          `${action.charAt(0).toUpperCase() + action.slice(1)} successful!`
        );
        window.location.href = "/dashboard"; // Redirect to another page after success
      } else {
        alert(
          `${
            action.charAt(0).toUpperCase() + action.slice(1)
          } failed. Please try again.`
        );
      }
    })
    .catch((error) => {
      console.error("Error during " + action + ":", error);
      alert("Something went wrong. Please try again.");
    });
}
