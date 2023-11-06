// Toggle mobile menu visibility
document.addEventListener("DOMContentLoaded", function() {
  const mobileMenu = document.getElementById("mobile-menu");
  const hamburgerBtn = document.getElementById("hamburger-btn");

  hamburgerBtn.addEventListener("click", function() {
      mobileMenu.classList.toggle("hidden");
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const chatBody = document.getElementById("chat-body");
  const messageInput = document.getElementById("message-input");
  const sendButton = document.getElementById("send-btn");

  // Function to generate a random color for the user's messages
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function addMessage(message, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender ? "sent" : "received");
    messageDiv.innerHTML = `<p style="color: ${getRandomColor()}">${message}</p>`;
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight; // Auto-scroll to the bottom
  }

  function sendMessage() {
    const message = messageInput.value.trim();
    if (message !== "") {
      addMessage(message, true);
      messageInput.value = "";
    }
  }

  sendButton.addEventListener("click", sendMessage);
  messageInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });
});
document.addEventListener("DOMContentLoaded", function() {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const dropdownMenu = document.getElementById("dropdown-menu");

    hamburgerBtn.addEventListener("click", function() {
      dropdownMenu.classList.toggle("hidden"); // Toggle the visibility of the dropdown menu
    });

    // Hide the dropdown menu when clicking outside
    document.addEventListener("click", function(event) {
      if (!dropdownMenu.contains(event.target) && !hamburgerBtn.contains(event.target)) {
        dropdownMenu.classList.add("hidden");
      }
    });
  });

  // script.js
document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("pieChart").getContext("2d");
  const data = {
      labels: ["Win", "Loss", "Draw"],
      datasets: [{
          data: [87, 10, 3], // Example data, you can replace with actual data
          backgroundColor: ["#4CAF50", "#F44336", "#2196F3"],
      }],
  };
  const options = {
      responsive: true,
      animation: {
          animateRotate: true,
          animateScale: true,
      },
  };
  new Chart(ctx, {
      type: "pie",
      data: data,
      options: options,
  });
});
