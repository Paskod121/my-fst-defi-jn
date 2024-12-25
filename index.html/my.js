 // Open the modal
 function openModal() {
    document.getElementById("myModal").style.display = "flex";
  }

  // Close the modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }

  // Function to toggle the music on/off
  function toggleMusic() {
    var audio = document.getElementById("audio");
    if (audio.paused) {
      audio.play();  // Start the audio if it's paused
    } else {
      audio.pause();  // Pause the audio if it's playing
    }
  }


  function toggleContent() {
    var content = document.querySelector('.content');
    if (content.style.display === 'none') {
    content.style.display = 'block';
    } else {
    content.style.display = 'none';
    }
  }
  // Snowfall effect
  function createSnowflakes() {
    const canvas = document.getElementById('snowflakes');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const snowflakes = [];
      for (let i = 0; i < 100; i++) {
        snowflakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        speed: Math.random() * 3 + 1
          });
      }

      function drawSnowflakes() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';

        snowflakes.forEach(flake => {
          ctx.beginPath();
          ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
          ctx.fill();

        flake.y += flake.speed;
          if (flake.y > canvas.height) {
            flake.y = 0;
            flake.x = Math.random() * canvas.width;
              }
          });

          requestAnimationFrame(drawSnowflakes);
      }

      drawSnowflakes();
  }

  // Countdown to Christm
  function updateCountdown() {
      const now = new Date();
      const christmas = new Date(now.getFullYear(), 11, 25);
      
      if (now > christmas) {
          christmas.setFullYear(now.getFullYear() + 1);
      }

      const diff = christmas.getTime() - now.getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      document.getElementById('countdown').innerHTML = 
          `Noël dans : ${days} jours, ${hours} heures, ${minutes} minutes, ${seconds} secondes`;
  }

  // Initialize
  createSnowflakes();
  updateCountdown();
  setInterval(updateCountdown, 1000);
 function ouvrirCadeau() {
  alert("Joyeux Noël ! 🎉🎄");
 
}

    