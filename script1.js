const main = document.getElementById('main');
let count = 1;

// Create the audio element and set the source
const mus1 = new Audio('mats/bailando.mp3');
mus1.loop = true;

window.addEventListener('scroll', () => {
  // Check if the user has scrolled to the bottom of the entire page
  const scrollPosition = window.scrollY + window.innerHeight;
  const pageHeight = document.documentElement.scrollHeight;

  if (scrollPosition >= pageHeight) {
    // Insert new content directly into #main
    main.innerHTML += `
      <section class="fishes">
        <img src="mats/fish.gif" alt="wait for da fish to load...">
      </section>
      <section class="fishes">
        <img src="mats/fish.gif" alt="wait for da fish to load...">
      </section>
      <section class="fishes">
        <img src="mats/fish.gif" alt="wait for da fish to load...">
      </section>
      <section class="fishes">
        <img src="mats/fish.gif" alt="wait for da fish to load...">
      </section>
      <section class="fishes">
        <img src="mats/fish.gif" alt="wait for da fish to load...">
      </section>
      <section class="fishes">
        <img src="mats/fish.gif" alt="wait for da fish to load...">
      </section>
      <section class="fishes">
        <img src="mats/fish.gif" alt="wait for da fish to load...">
      </section>
      <section class="fishes">
        <img src="mats/fish.gif" alt="wait for da fish to load...">
      </section>`;
    count++;
  }
});

function tryPlaying() {
      if (mus1.paused) {
            mus1.play().catch(error => {
              console.error('Audio playback failed:', error);
            });
          }
}

      const userLanguage = navigator.language || navigator.userLanguage;
      if (userLanguage === 'pl') {
            const title = document.getElementById('title'); const subtitle = document.getElementById('subtitle');
            title.textContent = "Akwarium";
            subtitle.textContent = "(Kliknij tutaj dla epickiej muzyki)";
      }