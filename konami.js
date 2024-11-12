// Konami Code sequence: [↑, ↑, ↓, ↓, ←, →, ←, →, B, A]
let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let userInput = [];
let konamiTriggered = false;

document.addEventListener('keydown', (event) => {
  userInput.push(event.keyCode);
  
  // Keep only the last 'konamiCode.length' entries
  userInput = userInput.slice(-konamiCode.length);
  
  if (!konamiTriggered && userInput.toString() === konamiCode.toString()) {
    konamiTriggered = true;
    
    // Change background color to blue
    document.body.style.backgroundColor = '#0000FF';

    // Display congratulations message
    const congratsMessage = document.createElement('div');
    congratsMessage.textContent = "Congratulations!";
    congratsMessage.style.position = "fixed";
    congratsMessage.style.top = "50%";
    congratsMessage.style.left = "50%";
    congratsMessage.style.transform = "translate(-50%, -50%)";
    congratsMessage.style.fontSize = "3em";
    congratsMessage.style.color = "#FFFFFF";
    congratsMessage.style.zIndex = "1000";
    congratsMessage.style.padding = "20px";
    congratsMessage.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    congratsMessage.style.borderRadius = "10px";
    congratsMessage.style.textAlign = "center";
    
    document.body.appendChild(congratsMessage);
  }
});
