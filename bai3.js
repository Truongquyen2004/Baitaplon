function updateTime() {
    // Get current date and time
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
  
    // Format time string
    const currentTime = `${hours}:${minutes}:${seconds}`;
  
    // Update the content of the paragraph with ID "timeDisplay"
    document.getElementById("timeDisplay").textContent = currentTime;
  }
  
  // Call the updateTime function initially to display the time on page load
  updateTime();
  
  // Call the updateTime function every second to update the displayed time
  setInterval(updateTime, 1000);