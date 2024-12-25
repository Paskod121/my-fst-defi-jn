const audio = document.getElementById('backgroundMusic');
           const toggleButton = document.getElementById('toggleMusic');

           // Attempt to autoplay with user interaction
            document.addEventListener('click', function() {
                audio.play().catch(error => {
                    console.log('Autoplay was prevented:', error);
                });
           });

           // Toggle music play/pause
            toggleButton.addEventListener('click', () => {
                if (audio.paused) {
                    audio.play();
                } else {
                    audio.pause();
                    }
                })