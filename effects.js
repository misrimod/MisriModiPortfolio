// Function to split the text into individual letters and add hover effect
function addLetterBounceEffect(textElementId) {
    const textElement = document.querySelector(`#${textElementId}`);
    const text = textElement.textContent;
    textElement.innerHTML = '';
  
    // Split the text into words and then into letters
    text.split(' ').forEach(word => {
      word.split('').forEach(char => {
        const span = document.createElement('span');
        span.classList.add('letter');
        span.textContent = char;
        textElement.appendChild(span);
      });
  
      // Add a span with class 'space' to create space between words
      const space = document.createElement('span');
      space.classList.add('space');
      space.innerHTML = '&nbsp;'; // Non-breaking space
      textElement.appendChild(space);
    });
  
    // Remove the trailing space
    textElement.removeChild(textElement.lastChild);
  
    // Add the hover effect
    textElement.addEventListener('mousemove', (e) => {
      const letters = document.querySelectorAll(`#${textElementId} .letter`);
      letters.forEach(letter => {
        const rect = letter.getBoundingClientRect();
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = mouseX - centerX;
        const deltaY = mouseY - centerY;
  
        // Calculate the distance between the cursor and the letter
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const maxDistance = 100;  // Maximum distance the letters can move
  
        // Calculate movement based on cursor position
        const moveX = (deltaX / distance) * maxDistance;
        const moveY = (deltaY / distance) * maxDistance;
  
        // Apply transform and add bounce effect
        letter.style.transform = `translate(${moveX}px, ${moveY}px)`;
        letter.style.opacity = 0.7 + (1 - distance / maxDistance) * 0.1;
      });
    });
  
    // Reset the letters when the mouse leaves
    textElement.addEventListener('mouseleave', () => {
      const letters = document.querySelectorAll(`#${textElementId} .letter`);
      letters.forEach(letter => {
        letter.style.transform = 'translate(0, 0)';
        letter.style.opacity = 1;
      });
    });
  }
  
  // Apply the effect to the introduction text
  addLetterBounceEffect('introduction-h1');



  