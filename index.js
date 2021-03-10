document.onreadystatechange = () => {
  if (document.readyState === "complete") {

    // Add listener to play sounds and toggle animation
    document.addEventListener('keydown', playSound)

    // Add Listeners to reverse animations
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition))

    // Play a sound and initiate playing animation
    function playSound(evt){
      const audio = document.querySelector(`audio[data-key="${evt.keyCode}"]`)
      const key = document.querySelector(`.key[data-key="${evt.keyCode}"]`)
      if (!audio) return // Stop if no element
      audio.currentTime = 0; // Reinitialise audio
      audio.play();
      key.classList.add('playing');
    }

    // Reverse animation once complete
    function removeTransition(evt){
      if(evt.propertyName !== "transform") return; // Skip if not transform
      evt.target.classList.remove('playing');
    }
  }
};