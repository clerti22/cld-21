
const button = document.getElementById('avoidButton');

button.addEventListener('mousemove', () => {
  const randomX = Math.random() * (window.innerWidth - button.offsetWidth);
  const randomY = Math.random() * (window.innerHeight - button.offsetHeight);
  const randomText = generateRandomText();
  
  button.textContent = randomText;
  button.style.left = randomX + 'px';
  button.style.top = randomY + 'px';
});

function generateRandomText() {
  const phrases = ['Please', 'Come on', 'sige na po pls pls','Why you to click no:(','Baby grrr','Ma sad ako huhuh','Maluoy ka','Sure najud?','hahaha cannot catch me :p']; 
  return phrases[Math.floor(Math.random() * phrases.length)]; 
}

function yay(){
  window.location.href = "index2.html";
}
