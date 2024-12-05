// Simulate version selection change
document.querySelector('.version-dropdown').addEventListener('change', (e) => {
  console.log(`Selected version: ${e.target.value}`);
});

// Handle Play button click
document.querySelector('.play-button').addEventListener('click', () => {
  alert('Launching Minecraft...');
});
