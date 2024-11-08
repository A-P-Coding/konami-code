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
    alert('Konami Code activated!');
    // Add additional actions here, such as revealing a hidden message or changing the background color
    document.body.style.backgroundColor = '#FF69B4'; // Change background color as an example
  }
});
